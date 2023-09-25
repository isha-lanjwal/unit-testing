import { NgModule,APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterModule,Router } from '@angular/router';
import { routes } from './app-routing.module';
import {CustomLocationStrategy} from '../app/custom-location-strategy';
import { LocationStrategy} from '@angular/common';
export function init_app(router: Router){
  return ()  => { 
    return new Promise((resolve,reject) => {
      return setTimeout(() => resolve(true), 1000);
    })
  }
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: false,  scrollPositionRestoration: 'enabled', scrollOffset: [0, 0],
    anchorScrolling: 'enabled',})
  ],
  exports:[
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [{ provide: APP_INITIALIZER, useFactory: init_app, multi: true, deps: [Router] },
  {provide: LocationStrategy, useClass: CustomLocationStrategy}, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
