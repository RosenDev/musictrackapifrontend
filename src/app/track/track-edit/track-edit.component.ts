import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateTrackModel } from 'src/app/model/create.track.model';
import { UpdateTrackModel } from 'src/app/model/update-track.model';
import { TracksService } from 'src/app/service/tracks.service';

/**
 * TrackEditComponent is responsible for creating and updating track information.
 */
@Component({
  selector: 'app-track-edit',
  templateUrl: './track-edit.component.html',
})
export class TrackEditComponent implements OnInit {
  /**
   * The title of the track edit page.
   */
  public title = '';

  /**
   * The ID of the track being edited.
   */
  private trackId = 0;

  /**
   * The FormGroup instance for the track edit form.
   */
  public trackForm: FormGroup;

  /**
   * Creates an instance of TrackEditComponent.
   * @param formBuilder The FormBuilder instance used for creating the trackForm FormGroup.
   * @param tracksService The TracksService instance used for track-related operations.
   * @param router The Router instance used for navigating to different routes.
   * @param route The ActivatedRoute instance used for retrieving route parameters.
   */
  constructor(
    private formBuilder: FormBuilder,
    private tracksService: TracksService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Initialize the trackForm FormGroup with form controls and validators
    this.trackForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      writtenBy: new FormControl('', [Validators.required]),
      performedBy: new FormControl('', [Validators.required]),
      arrangedBy: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
      type: new FormControl('', [Validators.required]),
    });
  }

  /**
   * Initializes the component and retrieves the track information if an ID is provided.
   */
  public ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      if (x.has('id')) {
        this.title = 'Update Track';
        this.trackId = Number(x.get('id'));
        this.tracksService.getEntityById(this.trackId).subscribe(x => {
          this.trackForm.patchValue(x.result);
        });
      } else {
        this.title = 'Create Track';
      }
    });
  }

  /**
   * Submits the track form and performs create or update operation based on the track ID.
   */
  public submit() {
    if (this.trackForm.invalid) {
      return;
    }

    if (!this.trackId) {
      const trackModel = <CreateTrackModel>(
        Object.assign({}, this.trackForm.value)
      );
      this.tracksService.createTrack(trackModel).subscribe(success => {
        if (success) {
          this.router.navigate(['tracks']);
        }
      });
    } else {
      const trackModel = <UpdateTrackModel>(
        Object.assign({}, { ...this.trackForm.value, id: this.trackId })
      );
      this.tracksService.updateTrack(trackModel).subscribe(success => {
        if (success.result) {
          this.router.navigate(['tracks']);
        }
      });
    }
  }
}
