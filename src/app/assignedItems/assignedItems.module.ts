import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AssignedItemsComponent } from './assignedItems.component.ts';

export const routes = [
  { path: '', component: AssignedItemsComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AssignedItemsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class ErrorModule {
  static routes = routes;
}
