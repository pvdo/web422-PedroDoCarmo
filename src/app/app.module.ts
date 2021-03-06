import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { PostCardComponent } from './post-card/post-card.component';
import { SearchWidgetComponent } from './search-widget/search-widget.component';
import { LatestPostsComponent } from './latest-posts/latest-posts.component';
import { CategoriesComponent} from './categories/categories.component';
import { TagsComponent } from './tags/tags.component';
import { PostDataComponent} from './post-data/post-data.component';
import { PostHomeCardComponent } from './post-home-card/post-home-card.component';
import { LatestPostsHomeComponent } from './latest-posts-home/latest-posts-home.component';
import { LatestPostsFooterComponent } from './latest-posts-footer/latest-posts-footer.component';
import { PagingComponent } from './paging/paging.component';
import { FormsModule } from '@angular/forms';
import { PostsTableComponent } from './posts-table/posts-table.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NewPostComponent } from './new-post/new-post.component';
import { FilterPipe } from './filter-pipe';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    BlogComponent,
    PostComponent,
    PageNotFoundComponent,
    PostCardComponent,
    SearchWidgetComponent,
    LatestPostsComponent,
    CategoriesComponent,
    TagsComponent,
    PostDataComponent,
    PostHomeCardComponent,
    LatestPostsHomeComponent,
    LatestPostsFooterComponent,
    
    PagingComponent,
    
    PostsTableComponent,
    
    EditPostComponent,
    
    NewPostComponent,
    
    FilterPipe,
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
