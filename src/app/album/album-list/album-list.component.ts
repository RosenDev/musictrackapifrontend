/**
 * @fileOverview Album List Component
 * 
 * This component displays a list of albums and provides functionality to view, edit, and delete albums.
 * It communicates with the AlbumsService to retrieve and manipulate album data.
 */

import { Component, OnInit } from '@angular/core';
import { Paging } from 'src/app/model/paging.model';
import { AlbumsService } from 'src/app/service/albums.service';
import { AlbumViewModel } from './album-view.model';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * Represents the Album List Component.
 */
@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
})
export class AlbumListComponent implements OnInit {
  /**
   * The list of albums to be displayed.
   */
  public albums: AlbumViewModel[] = [];

  /**
   * Constructs the AlbumListComponent.
   * 
   * @param albumsService - Service for retrieving album data.
   * @param router - Router for navigation.
   * @param route - ActivatedRoute for retrieving route information.
   */
  constructor(
    private albumsService: AlbumsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  /**
   * Initializes the component.
   * Retrieves the list of albums from the AlbumsService and maps them to the AlbumViewModel.
   */
  ngOnInit(): void {
    const paging: Paging = { page: 1, size: 1000 };
    this.albumsService.searchEntites([], paging).subscribe(response => {
      if (!response) {
        return;
      }

      this.albums = [...response.result].map(
        x =>
          <AlbumViewModel>{
            id: x.id,
            name: x.name,
            publishingYear: x.publishingYear,
            tracks: x.tracks.map(x => x.name),
            duration: x.duration,
          }
      );
    });
  }

  /**
   * Formats the track names into a comma-separated string.
   * 
   * @param tracks - Array of track names.
   * @returns The formatted string of track names.
   */
  public formatTracks(tracks: string[]): string {
    return tracks.join(', ');
  }

  /**
   * Deletes an album with the specified ID.
   * 
   * @param id - The ID of the album to delete.
   */
  public deleteAlbum(id: number) {
    this.albumsService.deleteEntity(id).subscribe(() => {
      this.router
        .navigateByUrl('/refresh', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['/albums']);
        });
    });
  }

  /**
   * Navigates to the edit page for the specified album ID.
   * 
   * @param id - The ID of the album to edit.
   */
  public editAlbum(id: number) {
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }

  /**
   * Navigates to the create page to create a new album.
   */
  public createAlbum() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
