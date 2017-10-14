import { Component } from '@angular/core';
import { ModalService } from '../../modules/modals/modals.module';
import { SignUpModalComponent } from '../sign-up/sign-up.modal';

@Component({
  'selector': 'app-nav',
  'templateUrl': './nav.component.html',
  'styleUrls': ['./nav.component.scss']
})
export class NavComponent {

  constructor(
    private modalService: ModalService,
  ) { }

  public openSignUpModal() {
    this.modalService.open(SignUpModalComponent, {
      position: {
        top: '12rem'
      },
      width: '320px'
    });
  }
}
