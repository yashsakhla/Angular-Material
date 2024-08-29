import { Component, ElementRef, Renderer2, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'; // Optional if you add icons
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, MatInputModule, MatButtonModule, MatCardModule, ReactiveFormsModule, MatIconModule, MatFormFieldModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-basic';
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private renderer: Renderer2,
    private el: ElementRef) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Handle login logic here
      console.log('Login successful', this.loginForm.value);
    }
  }

  ngAfterViewInit(): void {
    this.typingEffect();
  }

  typingEffect() {
    const phrases = ['Employee Onboarding System'];
    const typingTextElement = this.el.nativeElement.querySelector(
      '#typing-text'
    );

    if (typingTextElement) {
      let textIndex = 0;

      const type = () => {
        if (textIndex < phrases[0].length) {
          // Append each character to the element safely using Renderer2
          const currentText = typingTextElement.innerHTML + phrases[0].charAt(textIndex);
          this.renderer.setProperty(typingTextElement, 'innerHTML', currentText);
          textIndex++;
          setTimeout(type, 100);
        }
      };
      type();
    }
  }
}
