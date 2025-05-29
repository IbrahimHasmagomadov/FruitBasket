import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FruitlisdataService {

  constructor() { }
  fruitlist = [
    {
      name: "Apfel",
      img: "apple.png",
      description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
      genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
      stars: 2.3,
      reviews: [{ name: "Kevin W.", text: "Ganz gut in der Regel!" }, { name: "Oliver J.", text: "Absoluter Favorit beim Frühstück" }]
    },
    {
      name: "Banane",
      img: "banana.png",
      description: "Bananen sind eine gute Quelle für Kalium, Vitamin C und Ballaststoffe. Sie sind leicht verdaulich und eignen sich hervorragend als Snack oder in Smoothies.",
      genus: "Echte Bananen (Musa)",
      stars: 4.5,
      reviews: [{ name: "Anna S.", text: "Perfekt für unterwegs!" }, { name: "Markus T.", text: "Meine Lieblingsfrucht!" }]
    },
    {
      name: "Orange",
      img: "orange.png",
      description: "Orangen sind reich an Vitamin C und Antioxidantien. Sie stärken das Immunsystem und fördern die Gesundheit der Haut.",
      genus: "Zitrusfrüchte (Citrus)",
      stars: 3.8,
      reviews: [{ name: "Lisa M.", text: "Frisch gepresster Orangensaft ist ein Muss!" }, { name: "Tom R.", text: "Lecker und gesund!" }]
    }
  ];
  addCommentToFruit(comment: string, index: number) {
    if (comment.trim() !== '') {
      this.fruitlist[index].reviews.push({ 
        name: 'Gast', 
        text: comment 
      });
    }
  }
}
