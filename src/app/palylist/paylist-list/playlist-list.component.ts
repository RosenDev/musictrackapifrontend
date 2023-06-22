import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../../service/playlists.service';
import { Paging } from '../../model/paging.model';
import { PlaylistViewModel } from './playlist-view.model';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Component representing the playlist list.
 */
@Component({
  selector: 'app-playlist-list',
  templateUrl: './playlist-list.component.html',
})
export class PlaylistListComponent implements OnInit {
  public playlists: PlaylistViewModel[] = [];

  constructor(
    private playlistsService: PlaylistsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const paging: Paging = { page: 1, size: 1000 };
    this.playlistsService.searchEntites([], paging).subscribe(response => {
      if (!response) {
        return;
      }

      this.playlists = response.result.map(x => ({
        id: x.id,
        name: x.name,
        duration: x.duration,
        isPublic: x.isPublic,
        album: x.album.name,
      }));
    });
  }

  /**
   * Deletes a playlist.
   * @param id The ID of the playlist to delete.
   */
  public deletePlaylist(id: number): void {
    this.playlistsService.deleteEntity(id).subscribe(() => {
      this.router.navigateByUrl('/refresh', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/playlists']);
      });
    });
  }

  /**
   * Navigates to the edit page for a playlist.
   * @param id The ID of the playlist to edit.
   */
  public editPlaylist(id: number): void {
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }

  /**
   * Navigates to the create page for a new playlist.
   */
  public createPlaylist(): void {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
