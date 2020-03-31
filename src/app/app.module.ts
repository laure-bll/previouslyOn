import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserInformationsComponent } from './user-informations/user-informations.component';
import { InfosSeriesComponent } from './infos-series/infos-series.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { UserFriendsComponent } from './user-friends/user-friends.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { MembersComponent } from './members/members.component';
import { HomeSeriesComponent } from './home-series/home-series.component';
import { HomeMoviesComponent } from './home-movies/home-movies.component';
import { InfosMoviesComponent } from './infos-movies/infos-movies.component';
import { ListComponent } from './list/list.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ArchiveComponent } from './archive/archive.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { RandomComponent } from './random/random.component';
import { CommentsComponent } from './comments/comments.component';
import { DetailEpisodeComponent } from './detail-episode/detail-episode.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserDashboardComponent,
    UserInformationsComponent,
    InfosSeriesComponent,
    NoPageFoundComponent,
    UserFriendsComponent,
    UserHistoryComponent,
    MembersComponent,
    HomeSeriesComponent,
    HomeMoviesComponent,
    InfosMoviesComponent,
    ListComponent,
    FavoriteComponent,
    ArchiveComponent,
    EpisodesComponent,
    RandomComponent,
    CommentsComponent,
    DetailEpisodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }