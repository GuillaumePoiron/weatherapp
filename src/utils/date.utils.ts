export function formatDate(dateStr: string) {
  // Convertir la chaîne de caractères en objet Date
  const dateObj = new Date(dateStr);

  // Obtenir le jour et le mois sous forme de nombres
  const jour = dateObj.getDate();
  const mois = dateObj.getMonth() + 1;

  // Créer un tableau de noms de mois
  const moisNoms = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre',
  ];

  // Formater la date avec le jour et le mois en utilisant le tableau de noms de mois
  return `${jour} ${moisNoms[mois - 1]}`;
}
