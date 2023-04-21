import Booklist from "./Booklist";
import { fireEvent, render, screen, waitFor } from "@testing-library/react"

const mockData = [
  {
    kind: "books#volume",
    id: "cF5tdOH8AyoC",
    etag: "RVplQX1zpxM",
    selfLink: "https://www.googleapis.com/books/v1/volumes/cF5tdOH8AyoC",
    volumeInfo: {
      title: "One Bad Apple",
      authors: ["Sheila Connolly"],
      publisher: "Penguin",
      publishedDate: "2008-08-05",
      description:
        "There's a killer in the orchard-and he's rotten to the core. INCLUDES RECIPES Meg Corey has come to the quaint New England town of Granford, Massachusetts, to sell her mother's old colonial home and apple orchard. Instead, she becomes embroiled in development plans that include her land, and her former flame from Boston. When he's found dead in the new septic tank on her property, the police immediately suspect Meg, whose only ally in town is the plumber Seth Chapin. Together, they'll have to peel back the layers of secrecy that surround the deal in order to find the real murderer, and save the orchard.",
      industryIdentifiers: [
        {
          type: "ISBN_10",
          identifier: "0425223043",
        },
        {
          type: "ISBN_13",
          identifier: "9780425223048",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 276,
      printType: "BOOK",
      categories: ["Fiction"],
      averageRating: 3.5,
      ratingsCount: 17,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "1.4.4.0.preview.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=cF5tdOH8AyoC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=cF5tdOH8AyoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.com/books?id=cF5tdOH8AyoC&printsec=frontcover&dq=apple&hl=&cd=1&source=gbs_api",
      infoLink:
        "http://books.google.com/books?id=cF5tdOH8AyoC&dq=apple&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/One_Bad_Apple.html?hl=&id=cF5tdOH8AyoC",
    },
    saleInfo: {
      country: "US",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "US",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=cF5tdOH8AyoC&hl=&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "There&#39;s a killer in the orchard-and he&#39;s rotten to the core.",
    },
  },
  {
    kind: "books#volume",
    id: "33gCDAAAQBAJ",
    etag: "iSagPrx2tKs",
    selfLink: "https://www.googleapis.com/books/v1/volumes/33gCDAAAQBAJ",
    volumeInfo: {
      title: "How to Make an Apple Pie and See the World",
      authors: ["Marjorie Priceman"],
      publisher: "Dragonfly Books",
      publishedDate: "1996-09-09",
      description:
        "Bake a delicious apple pie--and take a trip with this culinary global adventure! An apple pie is easy to make...if the market is open. But if the market is closed, the world becomes your grocery store. This picture book takes readers around the globe to gather ingredients for a delicious apple pie. First hop a steamboat to Italy for the finest semolina wheat. Then hitch a ride to England and hijack a cow for the freshest possible milk. And, oh yes! Don't forget to go apple picking in Vermont! A simple recipe for apple pie is included.",
      industryIdentifiers: [
        {
          type: "ISBN_13",
          identifier: "9780679880837",
        },
        {
          type: "ISBN_10",
          identifier: "0679880836",
        },
      ],
      readingModes: {
        text: false,
        image: false,
      },
      pageCount: 42,
      printType: "BOOK",
      categories: ["Juvenile Fiction"],
      averageRating: 3.5,
      ratingsCount: 11,
      maturityRating: "NOT_MATURE",
      allowAnonLogging: false,
      contentVersion: "0.1.0.0.preview.0",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false,
      },
      imageLinks: {
        smallThumbnail:
          "http://books.google.com/books/content?id=33gCDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        thumbnail:
          "http://books.google.com/books/content?id=33gCDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
      },
      language: "en",
      previewLink:
        "http://books.google.com/books?id=33gCDAAAQBAJ&printsec=frontcover&dq=apple&hl=&cd=2&source=gbs_api",
      infoLink:
        "http://books.google.com/books?id=33gCDAAAQBAJ&dq=apple&hl=&source=gbs_api",
      canonicalVolumeLink:
        "https://books.google.com/books/about/How_to_Make_an_Apple_Pie_and_See_the_Wor.html?hl=&id=33gCDAAAQBAJ",
    },
    saleInfo: {
      country: "US",
      saleability: "NOT_FOR_SALE",
      isEbook: false,
    },
    accessInfo: {
      country: "US",
      viewability: "PARTIAL",
      embeddable: true,
      publicDomain: false,
      textToSpeechPermission: "ALLOWED",
      epub: {
        isAvailable: false,
      },
      pdf: {
        isAvailable: false,
      },
      webReaderLink:
        "http://play.google.com/books/reader?id=33gCDAAAQBAJ&hl=&source=gbs_api",
      accessViewStatus: "SAMPLE",
      quoteSharingAllowed: false,
    },
    searchInfo: {
      textSnippet:
        "An apple pie is easy to make...if the market is open. But if the market is closed, the world becomes your grocery store. This picture book takes readers around the globe to gather ingredients for a delicious apple pie.",
    },
  },
];

describe("Booklist Component", () => {
  test("booklist should have a few items", () => {
    render(<Booklist list={mockData} />);

    const elements = screen.getAllByRole("listitem")
    expect(elements).toHaveLength(2)

  });
});
