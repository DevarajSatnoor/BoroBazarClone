import React from "react";
import { createContext, useState } from "react";
import agarbatti from '../components/assets/imagess/Agarbhatthi.png' 
import arabica from "../components/assets/imagess/arabicacoffee.png"
import babaarabica from "../components/assets/imagess/babaarabica.png"
import banana from "../components/assets/imagess/banana.png"
import bidriware from "../components/assets/imagess/Bidriware.png"
import Grapes from "../components/assets/imagess/bnggrapes.png"
import onion from "../components/assets/imagess/bngonion.png"
import bronzeware from "../components/assets/imagess/bronzeware.png"
import bronzelogo from "../components/assets/imagess/bronzewarelogo.png"
import byadagi from "../components/assets/imagess/byadagi.png"
import chappal from "../components/assets/imagess/chappal.png"
import chennapatnatoys from "../components/assets/imagess/Chennapatnatoys.png"
import ckmarabica from "../components/assets/imagess/ckmarabica.png"
import coorgarabica from "../components/assets/imagess/coorgarabica.png"
import coorgcaradamon from "../components/assets/imagess/coorgcardamon.png"
import orange from "../components/assets/imagess/coorgorange.png"
import pomello from "../components/assets/imagess/devnallipomello.png"
import peda from "../components/assets/imagess/dwdpeda.png"
import ganjifa from "../components/assets/imagess/ganjifacardsmys.png"
import guledhgudd from "../components/assets/imagess/guledguddkhana.png"
import hadagalijasmine from "../components/assets/imagess/hadagalijasmine.png"
import ilkalsaree from "../components/assets/imagess/ilkalsarees.png"
import kasuti from "../components/assets/imagess/kasuti.png"
import kinhal from "../components/assets/imagess/kinhaltoys.png"
import lambani from "../components/assets/imagess/lambaniemb.png"
import pepper from "../components/assets/imagess/malbarpepper.png"
import mango from "../components/assets/imagess/mango.png"
import molkalmursaree from "../components/assets/imagess/molkalmursarees.png"
import betel from "../components/assets/imagess/mysbetel.png"
import mysjasmine from "../components/assets/imagess/mysjasmine.png"
import myspainting from "../components/assets/imagess/myspaintings.png"
import mysrosewood from "../components/assets/imagess/Mysrosewoodinlay.png"
import myssandal from "../components/assets/imagess/myssandalsoap.png"
import oil from "../components/assets/imagess/myssandalwoodoil.png"
import silklogo from "../components/assets/imagess/myssilklogo.png"
import myssilk from "../components/assets/imagess/Mysurusilk.png"
import navalagundalogo from "../components/assets/imagess/Mysurusilk.png"
import durries from "../components/assets/imagess/Mysurusilk.png"
import redbanana from "../components/assets/imagess/Mysurusilk.png"
import robusta from "../components/assets/imagess/Mysurusilk.png"
import supari from "../components/assets/imagess/Mysurusilk.png"
import dal from "../components/assets/imagess/Mysurusilk.png"
import brinjal from "../components/assets/imagess/Mysurusilk.png"
import udupijasmine from "../components/assets/imagess/Mysurusilk.png"
import udupisaree from "../components/assets/imagess/udupisarees.png"
import ganjifalogo from "../components/assets/imagess/ganjifalogo.png"

export const bucket = createContext();

function CreateStore(props) {
  const initialData =[
    {
      id: "1",
      statename: "karnataka",
      gilist: [
        {
          id: "1",
          name: "Mysore Silk",
          image: [
            {
              imagename: "	Mysore Silk",
              imageurl: myssilk
            },
          ],
          price: "₹2065",
          rating: "4.8",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?Mysore Silk is variety of mulberry silk produced in the Indian district of Mysore, Karnataka. Karnataka produces 9,000 metric tons of mulberry silk, accounting for nearly 45% of the country's total mulberry silk production. ",
          sector: "Handicraft",
        },
      ],
    },
    {
      id: "2",
      statename: "telangana",
      gilist: [
        {
          id: "2",
          name: "Mysore Agarbhathi",
          image: [
            {
              imagename: "Mysore Agarbhathi",
              imgUrl: agarbatti
            },
         
          ],
          price: "₹55",
          rating: "3.8",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?Mysore Agarbathi is a variety of incense sticks manufactured at Mysore using locally grown ingredients which was found only in state of Karnataka before.",
          sector: "Manufacture",
        },
      ],
    },
    {
      id: "3",
      statename: "karnataka",
      gilist: [
        {
          id: "3",
          name: "Bidriware",
          image: [
            {
              imagename: "Bidriware",
              imageurl: bidriware
                
            },
          ],
          price: "₹550",
          rating: "4.3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicraft",
        },
      ],
    },
    {
      id: "4",
      statename: "karnataka",
      gilist: [
        {
          id: "4",
          name: "Channapatna Toys & Dolls",
          image: [
            {
              imagename: "Channapatna Toys & Dolls",
              imageurl: chennapatnatoys
                  },
          ],
          price: "₹350",
          rating: "4.5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicraft",
        },
      ],
    },
    {
      id: "5",
      statename: "karnataka",
      gilist: [
        {
          id: "5",
          name: "Mysore Rosewood Inlay",
          image: [
            {
              imagename: "Mysore Rosewood Inlay",
              imageurl:mysrosewood
                     },
          ],
          price: "₹1350",
          rating: "4.7",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicraft",
        },
      ],
    },
    {
      id: "6",
      statename: "karnataka",
      gilist: [
        {
          id: "6",
          name: "Mysore Sandalwood Oil",
          image: [
            {
              imagename: "Mysore Sandalwood Oil",
              imageurl: oil
              
            },
          ],
          price: "₹50",
          rating: "4.0",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Manufacture",
        },
      ],
    },
    {
      id: "7",
      statename: "karnataka",
      gilist: [
        {
          id: "7",
          name: "Mysore Sandalwood Soap",
          image: [
            {
              imagename: "Mysore Sandalwood Soap",
              imageurl:myssandal
            },
          ],
          price: "₹₹40",
          rating: "4.3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Manufacture",
        },
      ],
    },
    {
      id: "8",
      statename: "karnataka",
      gilist: [
        {
          id: "8",
          name: "Kasuti Embroidery",
          image: [
            {
              imagename: "Kasuti Embroidery",
              imageurl:kasuti
            },
          ],
          price: "₹300",
          rating: "4.5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicraft",
        },
      ],
    },
    {
      id: "9",
      statename: "karnataka",
      gilist: [
        {
          id: "9",
          name: "Mysore Traditional Paintings",
          image: [
            {
              imagename: "Mysore Traditional Paintings",
              imageurl: myspainting
            },
          ],
          price: "₹500",
          rating: "4.7",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicraft",
        },
      ],
    },
    {
      id: "10",
      statename: "karnataka",
      gilist: [
        {
          id: "10",
          name: "Coorg Orange",
          image: [
            {
              imagename: "Coorg Orange",
              imageurl: orange
            },
          ],
          price: "₹80",
          rating: "4.7",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "11",
      statename: "karnataka",
      gilist: [
        {
          id: "11",
          name: "Mysore Betel leaf",
          image: [
            {
              imagename: "Mysore Betel leaf",
              imageurl: betel
            },
          ],
          price: "₹120",
          rating: "4.4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "12",
      statename: "karnataka",
      gilist: [
        {
          id: "12",
          name: "Nanjanagud Banana",
          image: [
            {
              imagename: "Nanjanagud Banana",
              imageurl: banana
            },
          ],
          price: "₹75",
          rating: "4.1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "13",
      statename: "karnataka",
      gilist: [
        {
          id: "13",
          name: "Mysore Jasmine",
          image: [
            {
              imagename: "Mysore Jasmine",
              imageurl: mysjasmine
            },
          ],
          price: "₹250",
          rating: "4.6",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "14",
      statename: "karnataka",
      gilist: [
        {
          id: "14",
          name: "Udupi Jasmine",
          image: [
            {
              imagename: "Udupi Jasmine",
              imageurl: udupijasmine
            },
          ],
          price: "₹250",
          rating: "4.3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "15",
      statename: "karnataka",
      gilist: [
        {
          id: "15",
          name: "Hadagali Jasmine",
          image: [
            {
              imagename: "Hadagali Jasmine",
              imageurl: hadagalijasmine
            },
          ],
          price: "₹240",
          rating: "4.2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "16",
      statename: "karnataka",
      gilist: [
        {
          id: "16",
          name: "Ilkal Sarees",
          image: [
            {
              imagename: "Ilkal Sarees",
              imageurl: ilkalsaree
            },
          ],
          price: "₹850",
          rating: "4.7",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicraft",
        },
      ],
    },
    {
      id: "17",
      statename: "karnataka",
      gilist: [
        {
          id: "17",
          name: "Ganjifa Cards of Mysore",
          image: [
            {
              imagename: "Ganjifa Cards of Mysore",
              imageurl: ganjifa
            },
          ],
          price: "₹",
          rating: "4.1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicraft",
        },
      ],
    },
    {
      id: "18",
      statename: "karnataka",
      gilist: [
        {
          id: "18",
          name: "Navalgund Durries",
          image: [
            {
              imagename: "Navalgund Durries",
              imageurl: durries
            },
          ],
          price: "₹350",
          rating: "4.3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicraft",
        },
      ],
    },
    {
      id: "19",
      statename: "karnataka",
      gilist: [
        {
          id: "19",
          name: "Karnataka Bronze Ware",
          image: [
            {
              imagename: "Karnataka Bronze Ware",
              imageurl: bronzeware
            },
          ],
          price: "₹800",
          rating: "4.6",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicraft",
        },
      ],
    },
    {
      id: "20",
      statename: "karnataka",
      gilist: [
        {
          id: "20",
          name: "Molakalmuru Sarees",
          image: [
            {
              imagename: "Molakalmuru Sarees",
              imageurl: molkalmursaree
            },
          ],
          price: "₹1200",
          rating: "4.6",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicraft",
        },
      ],
    },
    {
      id: "21",
      statename: "karnataka",
      gilist: [
        {
          id: "21",
          name: "Monsooned Malabar Arabica Coffee",
          image: [
            {
              imagename: "Monsooned Malabar Arabica Coffee",
              imageurl: arabica
            },
          ],
          price: "₹180",
          rating: "4.2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "22",
      statename: "karnataka",
      gilist: [
        {
          id: "22",
          name: "Monsooned Malabar Robusta Coffee",
          image: [
            {
              imagename: "Monsooned Malabar Robusta Coffee",
              imageurl: robusta
            },
          ],
          price: "200₹",
          rating: "4.4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "23",
      statename: "karnataka",
      gilist: [
        {
          id: "23",
          name: "Coorg Green Cardamom",
          image: [
            {
              imagename: "Coorg Green Cardamom",
              imageurl: coorgcaradamon
            },
          ],
          price: "₹600",
          rating: "4.5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "24",
      statename: "karnataka",
      gilist: [
        {
          id: "24",
          name: "Dharwad Pedha",
          image: [
            {
              imagename: "Dharwad Pedha",
              imageurl: peda
              
            },
          ],
          price: "₹320",
          rating: "4.7",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Foodstuff",
        },
      ],
    },
    {
      id: "25",
      statename: "karnataka",
      gilist: [
        {
          id: "25",
          name: "Devanahalli Pomello",
          image: [
            {
              imagename: "Devanahalli Pomello",
              imageurl: pomello
            },
          ],
          price: "₹250",
          rating: "4.5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "26",
      statename: "karnataka",
      gilist: [
        {
          id: "26",
          name: "Appemidi Mango",
          image: [
            {
              imagename: "Appemidi Mango",
              imageurl: mango
            },
          ],
          price: "₹180",
          rating: "4.3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "27",
      statename: "karnataka",
      gilist: [
        {
          id: "27",
          name: "Kamalapur Red Banana",
          image: [
            {
              imagename: "Kamalapur Red Banana",
              imageurl: redbanana
            },
          ],
          price: "₹210",
          rating: "4.2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "28",
      statename: "karnataka",
      gilist: [
        {
          id: "28",
          name: "Sandur Lambani Embroidery",
          image: [
            {
              imagename: "Sandur Lambani Embroidery",
              imageurl: lambani
            },
          ],
          price: "₹250",
          rating: "4.7",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicraft",
        },
      ],
    },
    {
      id: "29",
      statename: "karnataka",
      gilist: [
        {
          id: "29",
          name: "Byadagi Chilli",
          image: [
            {
              imagename: "Byadagi Chilli",
              imageurl: byadagi
            },
          ],
          price: "₹350",
          rating: "4.0",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "30",
      statename: "karnataka",
      gilist: [
        {
          id: "30",
          name: "Udupi Mattu Gulla Brinjal",
          image: [
            {
              imagename: "Udupi Mattu Gulla Brinjal",
              imageurl: brinjal
            },
          ],
          price: "₹70",
          rating: "4.5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "31",
      statename: "karnataka",
      gilist: [
        {
          id: "31",
          name: "Kinhal Toys",
          image: [
            {
              imagename: "Kinhal Toys",
              imageurl: kinhal
            },
          ],
          price: "₹500",
          rating: "4.1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicraft",
        },
      ],
    },
    {
      id: "32",
      statename: "karnataka",
      gilist: [
        {
          id: "32",
          name: "Bangalore Blue Grapes",
          image: [
            {
              imagename: "Bangalore Blue Grapes",
              imageurl: Grapes
            },
          ],
          price: "₹110",
          rating: "4.3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "33",
      statename: "karnataka",
      gilist: [
        {
          id: "33",
          name: "Bangalore Rose Onion",
          image: [
            {
              imagename: "Bangalore Rose Onion",
              imageurl: onion
            },
          ],
          price: "₹50",
          rating: "4.1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "34",
      statename: "karnataka",
      gilist: [
        {
          id: "34",
          name: "Karnataka Bronzeware (Logo)",
          image: [
            {
              imagename: "Karnataka Bronzeware (Logo)",
              imageurl: bronzelogo
            },
          ],
          price: "₹100",
          rating: "4.0",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicrafts",
        },
      ],
    },
    {
      id: "35",
      statename: "karnataka",
      gilist: [
        {
          id: "35",
          name: "Ganjifa Cards of Mysore (Logo)",
          image: [
            {
              imagename: "Ganjifa Cards of Mysore (Logo)",
              imageurl: ganjifalogo
            },
          ],
          price: "₹100",
          rating: "4.1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicrafts",
        },
      ],
    },
    {
      id: "36",
      statename: "karnataka",
      gilist: [
        {
          id: "36",
          name: "Navalgund Durries (Logo)",
          image: [
            {
              imagename: "Navalgund Durries (Logo)",
              imageurl: navalagundalogo
            },
          ],
          price: "₹100",
          rating: "4.2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicrafts",
        },
      ],
    },
    {
      id: "37",
      statename: "karnataka",
      gilist: [
        {
          id: "37",
          name: "Guledgudd Khana",
          image: [
            {
              imagename: "Guledgudd Khana",
              imageurl: guledhgudd
            },
          ],
          price: "₹250",
          rating: "4.2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicrafts",
        },
      ],
    },
    {
      id: "38",
      statename: "karnataka",
      gilist: [
        {
          id: "38",
          name: "Udupi Sarees",
          image: [
            {
              imagename: "Udupi Sarees",
              imageurl:udupisaree
            },
          ],
          price: "₹1300",
          rating: "4.6",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicrafts",
        },
      ],
    },
    {
      id: "39",
      statename: "karnataka",
      gilist: [
        {
          id: "39",
          name: "Mysore Silk (Logo)",
          image: [
            {
              imagename: "Mysore Silk (Logo)",
              imageurl: silklogo
            },
          ],
          price: "₹100",
          rating: "4.2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicrafts",
        },
      ],
    },
    {
      id: "40",
      statename: "karnataka",
      gilist: [
        {
          id: "40",
          name: "Malabar Pepper",
          image: [
            {
              imagename: "Malabar Pepper",
              imageurl: pepper
            },
          ],
          price: "₹600",
          rating: "4.7",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "41",
      statename: "karnataka",
      gilist: [
        {
          id: "41",
          name: "Kolhapuri Chappal",
          image: [
            {
              imagename: "Kolhapuri Chappal",
              imageurl: chappal
            },
          ],
          price: "₹800",
          rating: "4.6",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Handicrafts",
        },
      ],
    },
    {
      id: "42",
      statename: "karnataka",
      gilist: [
        {
          id: "42",
          name: "Sirsi Supari",
          image: [
            {
              imagename: "Sirsi Supari",
              imageurl: supari
            },
          ],
          price: "₹200",
          rating: "4.7",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "43",
      statename: "karnataka",
      gilist: [
        {
          id: "43",
          name: "Chikmagalur Arabica Coffee",
          image: [
            {
              imagename: "Chikmagalur Arabica Coffee",
              imageurl: ckmarabica
            },
          ],
          price: "₹350",
          rating: "4.6",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "44",
      statename: "karnataka",
      gilist: [
        {
          id: "44",
          name: "Baba Budangiris Arabica Coffee",
          image: [
            {
              imagename: "Baba Budangiris Arabica Coffee",
              imageurl: babaarabica
            },
          ],
          price: "₹330",
          rating: "4.5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "45",
      statename: "karnataka",
      gilist: [
        {
          id: "45",
          name: "Coorg Arabica Coffee",
          image: [
            {
              imagename: "Coorg Arabica Coffee",
              imageurl: coorgarabica
            },
          ],
          price: "₹320",
          rating: "4.4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
    {
      id: "46",
      statename: "karnataka",
      gilist: [
        {
          id: "46",
          name: "Gulbarga Tur Dal",
          image: [
            {
              imagename: "Gulbarga Tur Dal",
              imageurl: dal
            },
          ],
          price: "₹220",
          rating: "4.7",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda voluptate explicabo provident similique rem facere, quasi, tempore eos magnam saepe ratione voluptatibus aperiam, omnis tenetur?",
          sector: "Agriculture",
        },
      ],
    },
  ]
  const [data, setData] = useState(initialData);

  console.log("data store", initialData);
  return (
    <>
      <bucket.Provider value={[data,setData]}>
        {props.children}
      </bucket.Provider>
    </>
  );
}
export default CreateStore;
