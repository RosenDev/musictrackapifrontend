/**
 * LocalService provides methods for interacting with the browser's local storage.
 * It allows saving, retrieving, removing, and clearing data from the local storage.
 */
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {
  
  /**
   * Saves data to the local storage.
   * @param key - The key under which the data will be saved.
   * @param value - The value to be saved.
   */
  public saveData(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  /**
   * Retrieves data from the local storage.
   * @param key - The key under which the data is saved.
   * @returns The value associated with the specified key, or null if the key doesn't exist.
   */
  public getData(key: string): string | null {
    return localStorage.getItem(key);
  }

  /**
   * Removes data from the local storage.
   * @param key - The key of the data to be removed.
   */
  public removeData(key: string): void {
    localStorage.removeItem(key);
  }

  /**
   * Clears all data from the local storage.
   */
  public clearData(): void {
    localStorage.clear();
  }
}
