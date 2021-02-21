import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, NavParams } from '@ionic/angular';
import { character } from 'src/app/model/character';
import { AuthService } from 'src/app/services/auth.service';
import { ImageaddService } from 'src/app/services/imageadd.service';

@Component({
  selector: 'app-formcharacter',
  templateUrl: './formcharacter.page.html',
  styleUrls: ['./formcharacter.page.scss'],
})
export class FormcharacterPage {
  private character: character;
  public mode: string;
  private form: FormGroup;

  constructor(private modal: ModalController,
    private formBuilder: FormBuilder,
    private navParams: NavParams,
    private authS: AuthService,
    private gallery: ImageaddService) {

    this.character = this.navParams.get('character');
    if (this.character && this.character.code) {
      console.log(this.character);
      this.mode = 'Editing';
    } else {
      this.mode = 'Creating';
      this.character = {
        code:'',  // for autoincrement
        namecharacter: '',
        race: '',
        rolclass: '',
        image: '',
        strength: 0,
        dexterity: 0,
        constitution: 0,
        intelligence: 0,
        wisdom: 0,
        charisma: 0,
        creator: this.authS.getUser()
      };

    }

    this.form = this.formBuilder.group({
      code: new FormControl(this.character.code),
      
      namecharacter: new FormControl(
        this.character.namecharacter,
        Validators.compose([Validators.required, Validators.maxLength(30)])
      ),
      race: new FormControl(
        this.character.race,
        Validators.compose([Validators.required, Validators.maxLength(12)])
      ),
      rolclass: new FormControl(
        this.character.rolclass,
        Validators.compose([Validators.required, Validators.maxLength(12)])
      ),

      strength: new FormControl(
        this.character.strength,
        Validators.compose([Validators.required, Validators.maxLength(2)])
      ),
      dexterity: new FormControl(
        this.character.dexterity,
        Validators.compose([Validators.required, Validators.maxLength(2)])
      ),
      constitution: new FormControl(
        this.character.constitution,
        Validators.compose([Validators.required, Validators.maxLength(2)])
      ),
      intelligence: new FormControl(
        this.character.intelligence,
        Validators.compose([Validators.required, Validators.maxLength(2)])
      ),
      wisdom: new FormControl(
        this.character.wisdom,
        Validators.compose([Validators.required, Validators.maxLength(2)])
      ),
      charisma: new FormControl(
        this.character.charisma,
        Validators.compose([Validators.required, Validators.maxLength(2),])
      ),      
    });
  }

  //______________________________________CONTROL DE ERRORES
  /*
  get errorControl() {
    return this.form.controls;
  }
  get errorControlNamecharacter() {
    if (this.errorControl.namecharacter.status === 'INVALID') {
      if (this.errorControl.namecharacter.errors.required) {
        return 'Campo nombre requerido';
      }
      if (this.errorControl.namecharacter.errors.maxlength) {
        return 'La longitud máxima del nombre es de 30 carácteres';
      }
    }
  }
  get errorControlRace() {
    if (this.errorControl.race.errors.required) {
      return 'Campo raza requerido';
    }
    if (this.errorControl.race.status == 'INVALID') {
      if (this.errorControl.race.errors.maxlength) {
        return 'La longitud máxima de la raza es de 12 carácteres';
      }
    }
  }
  get errorControlRolclass() {
    if (this.errorControl.rolclass.errors.required) {
      return 'Campo clase requerido';
    }
    if (this.errorControl.rolclass.status == 'INVALID') {
      if (this.errorControl.rolclass.errors.maxlength) {
        return 'La longitud máxima de la clase es de 12 carácteres';
      }
    }
  }
  get errorControlStrength() {
    if (this.errorControl.strength.errors.required) {
      return 'Campo fuerza requerido';
    }
    if (this.errorControl.strength.status == 'INVALID') {
      if (this.errorControl.strength.errors.maxlength) {
        return 'Solo puede tener un máximo de dos números';
      }
    }
  }
  get errorControlDexterity() {
    if (this.errorControl.dexterity.errors.required) {
      return 'Campo destreza requerido';
    }
    if (this.errorControl.dexterity.status == 'INVALID') {
      if (this.errorControl.dexterity.errors.maxlength) {
        return 'Solo puede tener un máximo de dos números';
      }
    }
  }
  get errorControlConstitution() {
    if (this.errorControl.constitution.errors.required) {
      return 'Campo constitución requerido';
    }
    if (this.errorControl.constitution.status == 'INVALID') {
      if (this.errorControl.constitution.errors.maxlength) {
        return 'Solo puede tener un máximo de dos números';
      }
    }
  }
  get errorControlIntelligence() {
    if (this.errorControl.intelligence.errors.required) {
      return 'Campo inteligencia requerido';
    }
    if (this.errorControl.intelligence.status == 'INVALID') {
      if (this.errorControl.intelligence.errors.maxlength) {
        return 'Solo puede tener un máximo de dos números';
      }
    }
  }
  get errorControlWisdom() {
    if (this.errorControl.wisdom.errors.required) {
      return 'Campo sabiduría requerido';
    }
    if (this.errorControl.wisdom.status == 'INVALID') {
      if (this.errorControl.wisdom.errors.maxlength) {
        return 'Solo puede tener un máximo de dos números';
      }
    }
  }
  get errorControlCharisma() {
    if (this.errorControl.charisma.errors.required) {
      return 'Campo carisma requerido';
    }
    if (this.errorControl.charisma.status == 'INVALID') {
      if (this.errorControl.charisma.errors.maxlength) {
        return 'Solo puede tener un máximo de dos números';
      }
    }
  }
  */
  //______________________________________CONTROL DE ERRORES
  

  submitForm() {
    console.log("ENVIANDO FORMULARIO")
    let character=this.form.value
    character.image=this.character.image
    character.creator=this.authS.getUser()
    console.log(character)
    this.dismiss(character);
  }
  
  public dismiss(character: character) {
    this.modal.dismiss(character);
  }

  //___________________________________________IMG

  setImg(){
    this.gallery.getImage().then(result=>{
      this.character.image=this.gallery.image
    }).catch(err=>{
      console.log(err)
    });
  }

}