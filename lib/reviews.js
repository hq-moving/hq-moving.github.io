export const GOOGLE_REVIEW_URL = 'https://g.page/r/CVPb-gl2uH2MEAI/review';

/** Curated Google reviews — update manually when new reviews are posted */
export const googleReviews = [
  {
    id: 'liz-karen-medrano',
    author: 'Liz Karen Medrano Reina',
    authorDetail: 'Corporate',
    isLocalGuide: false,
    rating: 5,
    dateLabel: '1 week ago',
    datePublished: '2026-06-10',
    text: 'LOS MEJORES DE FLORIDA',
  },
  {
    id: 'miles-burns',
    author: 'Miles Burns',
    isLocalGuide: false,
    rating: 5,
    dateLabel: '7 weeks ago',
    datePublished: '2026-04-29',
    text:
      'Very helpful service and booked on a moments notice, enjoyed working together and will hire again - thank you',
  },
  {
    id: 'will-beaton',
    author: 'Will Beaton',
    isLocalGuide: true,
    rating: 5,
    dateLabel: '28 weeks ago',
    datePublished: '2025-12-03',
    text: 'Hard workers',
  },
  {
    id: 'linda-badkin',
    author: 'Linda Badkin',
    isLocalGuide: false,
    rating: 5,
    dateLabel: '31 weeks ago',
    datePublished: '2025-11-12',
    highlights: ['Reasonable price · $200–400'],
    text:
      'George and his crew arrived on time. They did a great job with a friendly attitude. He also answers the phone promptly. I definitely recommend this company.',
  },
  {
    id: 'jemina-st-john',
    author: 'Jemina ST John',
    isLocalGuide: false,
    rating: 5,
    dateLabel: '34 weeks ago',
    datePublished: '2025-10-22',
    text:
      "I've been looking someone to do a small job. After speaking with George I didn't need to look any more. He was courteous, honest and worked with me on pricing. Very fair to say the least.",
  },
  {
    id: 'barrie-brown',
    author: 'Barrie Brown',
    isLocalGuide: false,
    rating: 5,
    dateLabel: '45 weeks ago',
    datePublished: '2025-08-13',
    text:
      "Alex and Courtney were extremely nice and worked very fast. They were amazingly strong! They even picked up a heavy box I had delivered to my neighbor's house that was too heavy for me to carry.",
  },
  {
    id: 'patchmar93',
    author: 'patchmar93',
    isLocalGuide: true,
    rating: 5,
    dateLabel: 'Jun 3, 2025',
    datePublished: '2025-06-03',
    highlights: ['Great price'],
    services: ['Senior moving', 'Small furniture moving'],
    text:
      'We were completely satisfied with the service from Headquarters Moving! Alex and Patrick were very professional, efficient, respectful, hard-working and friendly. They showed up early and made the move go very smoothly. Highly recommend using Headquarters Moving!',
  },
  {
    id: 'p-i',
    author: 'P I',
    isLocalGuide: false,
    rating: 5,
    dateLabel: 'May 30, 2025',
    datePublished: '2025-05-30',
    text:
      'The team arrived on time and were courteous, respectful and efficient. They completed the work in half the time we expected it to be done. They are honest also, we had hidden some money in a filing cabinet a while back. When they were moving the cabinet the money fell out. They brought it to us and mentioned it fell out of the cabinet.',
  },
  {
    id: 'rosetta-rogers',
    author: 'Rosetta Rogers',
    isLocalGuide: true,
    rating: 5,
    dateLabel: 'Mar 19, 2025',
    datePublished: '2025-03-19',
    text:
      'I contacted them last minute and I was thankful I did. George was so kind and helpful especially because I changed the date once and he was still able to accommodate me with my move! He arrived on time with his partner and was able to disassemble my bed and etc in no time!!! Definitely will be contacting him again for my next move.',
  },
  {
    id: 'ivia-delgado',
    author: 'Ivia Delgado',
    isLocalGuide: true,
    rating: 5,
    dateLabel: 'Mar 1, 2025',
    datePublished: '2025-03-01',
    text:
      'So glad to have used this company. George and Alex were courteous, they were very careful with all my furniture, and no damages done. Will definitely trust them with any future movings and will recommend to family and friends.',
  },
];

export function getReviewStats() {
  const count = googleReviews.length;
  const average =
    count === 0
      ? 0
      : googleReviews.reduce((sum, review) => sum + review.rating, 0) / count;

  return {
    count,
    average: Math.round(average * 10) / 10,
  };
}
