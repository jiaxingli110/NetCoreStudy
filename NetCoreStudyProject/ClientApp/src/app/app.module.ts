import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import module
import { ElModule } from 'element-angular';
// if you use webpack, import style

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { TodolistComponent } from './todolist/todolist.component';
import { StorageService} from './services/storage.service';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import { TransitionComponent } from './components/transition/transition.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { ProductComponent } from './product/product.component';
import 'element-angular/theme/index.css';

@NgModule({
  //组件
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    SearchComponent,
    TodolistComponent,
    NewsComponent,
    HeaderComponent,
    TransitionComponent,
    LifecycleComponent,
    ProductComponent
  ],
  imports: [
    //模块
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'app-login', component: LoginComponent },
      { path: 'app-search', component: SearchComponent },
      { path: 'app-todolist', component: TodolistComponent },
      { path: 'app-news', component: NewsComponent },
      { path: 'app-transition', component: TransitionComponent },
      { path: 'app-lifecycle', component: LifecycleComponent },
      { path: 'app-product', component: ProductComponent }
      
    ]),
    ElModule.forRoot(),
  ],
  //服务
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
