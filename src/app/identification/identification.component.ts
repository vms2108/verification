import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.css']
})
export class IdentificationComponent implements OnInit {
  name = 'Ivan';
  labelName = 'Имя';
  surname = 'Ivanov';
  labelSurname = 'Фамилия';
  birthday = '27.03.1986';
  labelBirthday = 'Дата рождения';
  birthplace = 'Saratov';
  labelBirthplace = 'Место рождения';
  index = '234567';
  labelIndex = 'Почтовый индекс';
  country = 'Russia';
  labelCountry = 'Страна';
  city = 'Rostov';
  labelCity = 'Город';
  address = 'Lenina, 54-7';
  labelAdress = 'Адреc';
  typeMain = 'passport';
  labelTypeMain = 'Тип документа';
  numberMain = '73 05 777888';
  labelNumberMain = 'Номер документа';
  validityMain = '23.09.2028';
  labelValidityMain = 'Срок действия';
  typeAddition = 'drivers license';
  labelTypeAddition = 'Тип документа';
  numberAddition = ' 984567';
  labelNumberAddition = 'Номер документа';
  validityAddition = '02.02.2022';
  labelValidityAddition = 'Срок действия';

  ngOnInit() {
  }
}
