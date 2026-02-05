const companyData: any = {
  Google: {
    Name: "Google",
    Overview:
      "Google is a global leader in technology, specializing in internet-related services and products. Our mission is to organize the world’s information and make it universally accessible and useful. Founded by Larry Page and Sergey Brin, Google has grown into one of the most influential companies in the world, providing innovative tools and services that help billions of people across the globe.",
    Industry: "Internet, Software & Technology Services",
    Website: "https://www.google.com",
    Size: "100,000+ Employees",
    Headquarters: "Mountain View, California, United States",
    Specialties: [
      "Search Engine",
      "Online Advertising",
      "Cloud Computing",
      "Software",
      "Hardware",
      "AI & Machine Learning",
      "Mobile Operating Systems",
      "Consumer Electronics",
    ],
  },
  Meta: {
    Name: "Meta",
    Overview:
      "Meta builds technologies that help people connect, find communities, and grow businesses. When Facebook launched in 2004, it changed the way people connect. Apps like Messenger, Instagram and WhatsApp further empowered billions around the world. Now, Meta is moving beyond 2D screens toward immersive experiences like augmented and virtual reality to help build the next evolution in social technology.",
    Industry: "Internet, Social Media",
    Website: "https://www.meta.com",
    Size: "50,000+ Employees",
    Headquarters: "Menlo Park, California, United States",
    Specialties: [
      "Social Networking",
      "Virtual Reality",
      "Augmented Reality",
      "Artificial Intelligence",
      "Connectivity",
    ],
  },
  Microsoft: {
    Name: "Microsoft",
    Overview:
      "Microsoft enables digital transformation for the era of an intelligent cloud and an intelligent edge. Its mission is to empower every person and every organization on the planet to achieve more. Microsoft set up its India operations in 1990. Today, Microsoft entities in India have over 11,000 employees, engaged in sales and marketing, research, development and customer services and support.",
    Industry: "Software, Technology",
    Website: "https://www.microsoft.com",
    Size: "200,000+ Employees",
    Headquarters: "Redmond, Washington, United States",
    Specialties: [
      "Business Software",
      "Developer Tools",
      "Cloud Computing",
      "Search",
      "Video Games",
      "Hardware",
    ],
  },
   Netflix: {
    Name: "Netflix",
    Overview:
      "Netflix is the world's leading streaming entertainment service with 222 million paid memberships in over 190 countries enjoying TV series, documentaries, feature films and mobile games across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any internet-connected screen.",
    Industry: "Entertainment",
    Website: "https://www.netflix.com",
    Size: "10,000+ Employees",
    Headquarters: "Los Gatos, California, United States",
    Specialties: [
      "Streaming Service",
      "Film Production",
      "Television Production",
    ],
  },
  Spotify: {
    Name: "Spotify",
      Overview: "Spotify is an audio streaming and media services provider. It is one of the largest music streaming service providers with over 489 million monthly active users, including 205 million paying subscribers, as of December 2022.",
    Industry: "Music, Streaming",
    Website: "https://www.spotify.com",
    Size: "8,000+ Employees",
    Headquarters: "Stockholm, Sweden",
    Specialties: [
      "Music Streaming",
      "Podcasts",
      "Audio",
    ]
  },
  Amazon: {
    Name: "Amazon",
    Overview: "Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking. Amazon strives to be Earth’s Most Customer-Centric Company, Earth’s Best Employer, and Earth’s Safest Place to Work.",
    Industry: "E-commerce, Technology",
    Website: "https://www.amazon.com",
    Size: "1,500,000+ Employees",
    Headquarters: "Seattle, Washington, United States",
    Specialties: ["E-commerce", "Cloud Computing", "Digital Streaming", "Artificial Intelligence"]
  },
  Apple: {
    Name: "Apple",
    Overview: "Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories, and sells a variety of related services.",
    Industry: "Consumer Electronics",
    Website: "https://www.apple.com",
    Size: "150,000+ Employees",
    Headquarters: "Cupertino, California, United States",
    Specialties: ["Consumer Electronics", "Software Services", "Online Services"]
  },
  Adobe: {
    Name: "Adobe",
    Overview: "Adobe is changing the world through digital experiences. For more than two decades, Adobe has been at the heart of making engaging experiences happen, and we have a long track record of reimagining the possibilities of digital experiences.",
    Industry: "Software",
    Website: "https://www.adobe.com",
    Size: "25,000+ Employees",
    Headquarters: "San Jose, California, United States",
    Specialties: ["Creative Cloud", "Document Cloud", "Experience Cloud"]
  }
};
const similar=[
{
  name: "Meta",
 employees: 58604
},
{
  name: "Netflix",
 employees: 12800
},
{
  name: "Microsoft",
 employees: 221000
},
{
  name: "Adobe",
 employees: 29439
},
{
  name: "Google",
 employees: 181798
},
{
  name: "Spotify",
 employees: 8200
},
{
  name: "Amazon",
 employees: 1561000
},
{
  name: "Apple",
 employees: 164000
}
]

export {companyData, similar};  