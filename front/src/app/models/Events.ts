export class Events{
  _id?:string;
  title:string = '';
  description:string='';
  price:number=0;
  time:number=0;
  category:string='';
  location:string='';
  nbrtickets:number=0;
  dateregistredeb:Date= new Date();
  dateregistrefin:Date= new Date();
  image?:string='';
  date:Date= new Date();
  ListeEvenements: any;
  categorie: any;
}
