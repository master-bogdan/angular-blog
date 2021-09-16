import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Routing
import { AppRoutingModule } from './app-routing.module';
// Components
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';
import { PostComponent } from './components/post/post.component';
// Shared
import { SharedModule } from './modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
