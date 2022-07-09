import { ArtisanLoader, ConsoleKernel } from '@athenna/artisan'

export class Kernel extends ConsoleKernel {
  /**
   * Register the commands for the application.
   *
   * @return {any[]}
   */
  get commands() {
    return [...ArtisanLoader.loadCommands()]
  }

  /**
   * Register the custom templates for the application.
   *
   * @return {any[]}
   */
  get templates() {
    return []
  }
}
