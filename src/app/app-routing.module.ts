import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserInformationsComponent } from './user-informations/user-informations.component';
import { InfosSeriesComponent } from './infos-series/infos-series.component';
import { InfosMoviesComponent } from './infos-movies/infos-movies.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { UserHistoryComponent } from './user-history/user-history.component';
import { UserFriendsComponent } from './user-friends/user-friends.component';
import { MembersComponent } from './members/members.component';
import { HomeMoviesComponent } from './home-movies/home-movies.component';
import { HomeSeriesComponent } from './home-series/home-series.component';
import { ListComponent } from './list/list.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ArchiveComponent } from './archive/archive.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { RandomComponent } from './random/random.component';
import { DetailEpisodeComponent } from './detail-episode/detail-episode.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home_movies', component: HomeMoviesComponent },
  { path: 'home_series', component: HomeSeriesComponent },
  { path: 'dashboard', component: UserDashboardComponent },
  { path: 'informations', component: UserInformationsComponent },
  { path: 'history', component: UserHistoryComponent },
  { path: 'friends', component: UserFriendsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'episodes/:id', component: EpisodesComponent },
  { path: 'comments/:id', component: CommentsComponent },
  { path: 'infos/:id', component: InfosSeriesComponent },
  { path: 'infosmovie/:id', component: InfosMoviesComponent },
  { path: 'mylist', component: ListComponent },
  { path: 'myfavoriteshows', component: FavoriteComponent },
  { path: 'myfavoriteshows', component: ArchiveComponent},
  { path: 'random', component: RandomComponent},
  { path: 'detail_episode/:id', component: DetailEpisodeComponent},


  { path: '**', component: NoPageFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }