import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/usuario.model';
import { registerForm } from 'interfaces/register-form.intefaces';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  // Definir controles como propiedades del componente
  nombre = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(6)]);

  public formSubmitted = false;
  public registerForm: FormGroup;
  usuario: Usuario = new Usuario(1);

  constructor(
    private fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router
  ) {
    // Agregar controles al FormGroup durante la inicialización
    this.registerForm = this.fb.group({
      nombre: this.nombre,
      email: this.email,
      password: this.password,
    });
  }

  crearUsuario() {
    this.formSubmitted = true;
    if (this.registerForm.valid) {
      const nuevoRegistro: registerForm = {
        ID_Usuario: undefined,
        Nombre: this.registerForm.get('nombre')?.value,
        Email: this.registerForm.get('email')?.value,
        Password: this.registerForm.get('password')?.value,
      };

      this.usuarioService.crearUsuario(nuevoRegistro).subscribe({
        next: (resp) => {
          console.log('Usuario registrado con éxito', resp);
          this.router.navigateByUrl('/dashboard');
        },
        error: (error) => {
          console.error('Error al registrar el usuario', error);
          // Puedes mostrar un mensaje de error al usuario si lo deseas
        }
      });
    }
  }
}
