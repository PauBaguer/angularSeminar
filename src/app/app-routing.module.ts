import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Components
import { CrearUserComponent } from './components/crear-user/crear-user.component';
import { ListarUsersComponent } from './components/listar-users/listar-users.component';
import { ChatListComponent } from './components/chat-list/chat-list.component';
import { ChatCreateComponent } from './components/chat-create/chat-create.component';

// Routes
const routes: Routes = [
  { path: '', component: ListarUsersComponent },
  { path: 'crear-user', component: CrearUserComponent },
  { path: 'editar-user/:name', component: CrearUserComponent },
  { path: 'chat-list', component: ChatListComponent },
  { path: 'chat-create', component: ChatCreateComponent },
  { path: 'edit-chat/:id', component: ChatCreateComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, // In case of a wrong URL, the code redirects to the main path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
