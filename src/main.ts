<<<<<<< HEAD
/// <reference types="@angular/localize" />

=======
import { enableProdMode } from '@angular/core';
>>>>>>> 845c07ec7acb8663fce65747c8d78db5edf1f82e
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
