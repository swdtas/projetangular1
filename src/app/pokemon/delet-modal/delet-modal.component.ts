import { Component,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delet-modal',
  templateUrl: './delet-modal.component.html',
  styleUrl: './delet-modal.component.css'
})
export class DeletModalComponent {
  @Output() confirmDelete: EventEmitter<void> = new EventEmitter<void>();
  onDeleteConfirmed(): void {
    this.confirmDelete.emit();
  } 
}
