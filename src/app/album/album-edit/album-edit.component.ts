import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateAlbumModel } from 'src/app/model/create-album.model';
import { UpdateAlbumModel } from 'src/app/model/update-album.model';
import { AlbumsService } from 'src/app/service/albums.service';

@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
})
export class AlbumEditComponent implements OnInit {
  public title = '';
  private albumId = 0;
  public albumForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private albumsService: AlbumsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.albumForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      publishingYear: new FormControl('', [Validators.required]),
      trackIds: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required])
    });
  }
  public ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      if (x.has('id')) {
        this.title = 'Update Album';
        this.albumId = Number(x.get('id'));
        this.albumsService.getEntityById(this.albumId).subscribe(x => {
          this.albumForm.patchValue(x.result);
        });
      } else {
        this.title = 'Create Album';
      }
    });
  }

  public submit() {
    if (this.albumForm.invalid) {
      return;
    }

    if (!this.albumId) {
      const albumModel = <CreateAlbumModel>(
        Object.assign({}, this.albumForm.value)
      );
        albumModel.trackIds = this.albumForm.value.trackIds.split(', ');
      this.albumsService.createAlbum(albumModel).subscribe(success => {
        if (success.result) {
          this.router.navigate(['albums']);
        }
      });
    } else {
      const albumModel = <UpdateAlbumModel>(
        Object.assign({}, { ...this.albumForm.value, id: this.albumId })
      );
      albumModel.trackIds = this.albumForm.value.trackIds.split(', ');
      this.albumsService.updateAlbum(albumModel).subscribe(success => {
        if (success.result) {
          this.router.navigate(['albums']);
        }
      });
    }
  }
}
