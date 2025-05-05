import React from "react";
import "./Como.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
// import icon from "../../public/logo192.png"

// import logo from './logo.svg';
import ss from "../../src/logo.svg";

// https://www.crimemapping.com/Share/66dfeeb3d9874dc78fdf8be1ad7f0c4c#;

function Addevent() {
  const { user, napi, setnapi } = useContext(AuthContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState("");

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });
  const customIcon = new L.Icon({
    iconUrl: require("leaflet/dist/images/marker-icon-2x.png"), // Add your own marker image
    iconSize: [30, 40],
    iconAnchor: [15, 40],
    popupAnchor: [0, -40],
  });

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    console.log(debouncedTerm);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
      console.log("this is before debpunce", debouncedTerm);
    }, 1000); // waits 500ms after user stops typing
    console.log("this is after  debpunce", debouncedTerm);

    return () => {
      clearTimeout(timer); // Clear previous timer on each key press
    };
  }, [searchTerm]);

  // console.log(napi)

  const event = {
    status: "OK",
    request_id: "df25137d-3579-44f5-9fa5-de0c33931a80",
    parameters: {
      query: "Concerts in San-Francisco",
      is_virtual: false,
      date: "any",
      start: 0,
    },
    data: [
      {
        event_id:
          "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI1LTA1LTEwfDM1NDExNDM5NDc3MzUzMzUxMzk=",
        name: "San Francisco Symphony - Lord of The Rings: The Two Towers (Film with Live Orchestra)",
        link: "https://www.sfexaminer.com/local-events/?_evDiscoveryPath=/event/1031859118n-san-francisco-symphony",
        description:
          "sfexaminer.com 465 California Street San Francisco, CA 94104 Phone: 415-359-2600 Email: info@sfexaminer.com path Facebook path Twitter path Instagram div © Copyright 2025 San Francisco Examiner...",
        language: "en",
        date_human_readable: "Sat, May 10, 2 – 5 PM PDT",
        start_time: "2025-05-10 14:00:00",
        start_time_utc: "2025-05-10 21:00:00",
        start_time_precision_sec: 1,
        end_time: "2025-05-10 17:00:00",
        end_time_utc: "2025-05-11 00:00:00",
        end_time_precision_sec: 1,
        is_virtual: false,
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCUUPG8_NwwfJvVwlKoqXfFtNAbIdPSFJAkMmknezDls75r3Qa3142DjNJTA&s=10",
        publisher: "San Francisco Examiner",
        publisher_favicon:
          "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.sfexaminer.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        publisher_domain: "www.sfexaminer.com",
        ticket_links: [
          {
            source: "Spotify.com",
            link: "https://open.spotify.com/concert/5MMVEJCmYuChC1chRNp8fr",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://spotify.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Axs.com",
            link: "https://www.axs.com/uk/events/593520/san-francisco-symphony-lord-of-the-rings-the-two-towers-film-with-live-tickets",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://axs.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Gametime.co",
            link: "https://gametime.co/music/san-francisco-symphony-lord-of-the-rings-the-two-towers-film-with-live-orchestra-tickets/5-10-2025-san-francisco-ca-davies-symphony-hall/events/664c60e8c5515dbde75af1a9",
            fav_icon:
              "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://gametime.co&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Stubhub.com",
            link: "https://www.stubhub.com/_C-11165?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-2016%7Cev-153403154%7Ccy-79823&ps_ev=153403154",
            fav_icon:
              "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://stubhub.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Viagogo.com",
            link: "https://www.viagogo.com/_C-11165?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-2016%7Cev-153403154%7Ccy-79823&ps_ev=153403154",
            fav_icon:
              "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://viagogo.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
        ],
        info_links: [
          {
            source: "Spotify.com",
            link: "https://open.spotify.com/concert/5MMVEJCmYuChC1chRNp8fr",
          },
        ],
        venue: {
          google_id: "0x808580991be02fd9:0xc60bb460e5f31987",
          name: "Louise M. Davies Symphony Hall",
          phone_number: "+14158646000",
          website: "https://www.sfsymphony.org",
          review_count: 503,
          rating: 4.8,
          subtype: "Concert hall",
          subtypes: ["Concert hall"],
          full_address:
            "Louise M. Davies Symphony Hall, 201 Van Ness Ave, San Francisco, CA 94102",
          latitude: 37.7779294,
          longitude: -122.42080879999999,
          district: "Civic Center",
          street_number: "201",
          street: "201 Van Ness Ave",
          city: "San Francisco",
          zipcode: "94102",
          state: "California",
          country: "US",
          timezone: "America/Los_Angeles",
          google_mid: "/g/11hcdwbfxd",
        },
      },
      {
        event_id:
          "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI1LTA1LTMwfDI5ODkwMjczMzE0MDMyNzI5OTQ=",
        name: "Royksopp",
        link: "https://www.nobhillgazette.com/local-events/?_evDiscoveryPath=/event/106366631n-r-yksopp-true-electric-dj-2025-the-regency-ballroom",
        description:
          "Röyksopp DJ Set Röyksopp is an electronic and chillout music duo based in Bergen, Norway, but the members were originally from Tromsø, Norway. The band consists of Torbjørn Brundtland and Svein...",
        language: "en",
        date_human_readable: "Fri, May 30, 10:00 – 11:30 PM PDT",
        start_time: "2025-05-30 22:00:00",
        start_time_utc: "2025-05-31 05:00:00",
        start_time_precision_sec: 1,
        end_time: "2025-05-30 23:30:00",
        end_time_utc: "2025-05-31 06:30:00",
        end_time_precision_sec: 1,
        is_virtual: false,
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNAstDS8BsmSOQu2zERqlN6V8Q0TodhiGjFKIjKuBAA&s=10",
        publisher: "Nobhillgazette.com",
        publisher_favicon:
          "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://www.nobhillgazette.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        publisher_domain: "www.nobhillgazette.com",
        ticket_links: [
          {
            source: "Spotify.com",
            link: "https://open.spotify.com/concert/6VHoh4dEXl0cmSwH1JZKyv",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://spotify.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Axs.com",
            link: "https://www.axs.com/uk/events/827214/royksopp-tickets",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://axs.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Bandsintown.com",
            link: "https://www.bandsintown.com/e/106366631?app_id=ggl_feed&came_from=289&utm_medium=web&utm_source=ggl_feed&utm_campaign=event",
            fav_icon:
              "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://bandsintown.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Viagogo.com",
            link: "https://www.viagogo.com/_C-14525?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-2091%7Cev-157001281%7Ccy-6208&ps_ev=157001281",
            fav_icon:
              "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://viagogo.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Vividseats.com",
            link: "https://www.vividseats.com/royksopp---dj-tickets-san-francisco-the-regency-ballroom-5-30-2025--concerts-dance-electronica/production/5515913",
            fav_icon:
              "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://vividseats.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
        ],
        info_links: [
          {
            source: "Nobhillgazette.com",
            link: "https://www.nobhillgazette.com/local-events/?_evDiscoveryPath=/event/106366631n-r-yksopp-true-electric-dj-2025-the-regency-ballroom",
          },
        ],
        venue: {
          google_id: "0x80858095a938711f:0x2481d06549638b7b",
          name: "The Regency Ballroom",
          phone_number: null,
          website: "https://www.theregencyballroom.com",
          review_count: 1846,
          rating: 4.4,
          subtype: "Event venue",
          subtypes: ["Event venue", "Concert hall", "Live music venue"],
          full_address:
            "The Regency Ballroom, 1300 Van Ness Ave, San Francisco, CA 94109",
          latitude: 37.7878701,
          longitude: -122.4214133,
          district: "Lower Nob Hill",
          street_number: "1300",
          street: "1300 Van Ness Ave",
          city: "San Francisco",
          zipcode: "94109",
          state: "California",
          country: "US",
          timezone: "America/Los_Angeles",
          google_mid: "/m/0k04py6",
        },
      },
      {
        event_id:
          "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI1LTA1LTI1fDE2MTUwNTA3NzYyMTMzODY1ODMy",
        name: "San Francisco Symphony - Salonen Conducts The Firebird",
        link: "https://dothebay.com/events/2025/5/25/salonen-conducts-the-firebird-tickets",
        description:
          "Check out Salonen Conducts The Firebird at Davies Symphony Hall in San Francisco on May 25, 2025 and get detailed info for the event - tickets, photos, video and reviews.",
        language: "en",
        date_human_readable: "Sun, May 25, 2:00 – 3:30 PM",
        start_time: "2025-05-25 14:00:00",
        start_time_utc: "2025-05-25 14:00:00",
        start_time_precision_sec: 1,
        end_time: "2025-05-25 15:30:00",
        end_time_utc: "2025-05-25 15:30:00",
        end_time_precision_sec: 1,
        is_virtual: false,
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGIXnXp1oQ6awOiJl5S8YuNrj2B_joR-QyxDe7ven8cg&s=10",
        publisher: "Dothebay.com",
        publisher_favicon:
          "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://dothebay.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        publisher_domain: "dothebay.com",
        ticket_links: [
          {
            source: "Axs.com",
            link: "https://www.axs.com/events/597003/san-francisco-symphony-salonen-conducts-the-firebird-tickets",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://axs.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Stubhub.com",
            link: "https://www.stubhub.com/_C-11165?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-2016%7Cev-153741936%7Ccy-79823&ps_ev=153741936",
            fav_icon:
              "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://stubhub.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Viagogo.com",
            link: "https://www.viagogo.com/_C-11165?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-2016%7Cev-153741936%7Ccy-79823&ps_ev=153741936",
            fav_icon:
              "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://viagogo.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Vividseats.com",
            link: "https://www.vividseats.com/san-francisco-symphony-tickets-san-francisco-davies-symphony-hall-5-25-2025--concerts-classical/production/4879699",
            fav_icon:
              "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://vividseats.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Gametime.co",
            link: "https://gametime.co/music/san-francisco-symphony-salonen-conducts-the-firebird-tickets/5-25-2025-san-francisco-ca-davies-symphony-hall/events/664c60ebe982ef402aafc207",
            fav_icon:
              "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://gametime.co&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
        ],
        info_links: [
          {
            source: "Dothebay.com",
            link: "https://dothebay.com/events/2025/5/25/salonen-conducts-the-firebird-tickets",
          },
        ],
        venue: {
          google_id: "0x808580991be02fd9:0xc60bb460e5f31987",
          name: "Louise M. Davies Symphony Hall",
          phone_number: "+14158646000",
          website: "https://www.sfsymphony.org",
          review_count: 503,
          rating: 4.8,
          subtype: "Concert hall",
          subtypes: ["Concert hall"],
          full_address:
            "Louise M. Davies Symphony Hall, 201 Van Ness Ave, San Francisco, CA 94102",
          latitude: 37.7779294,
          longitude: -122.42080879999999,
          district: "Civic Center",
          street_number: "201",
          street: "201 Van Ness Ave",
          city: "San Francisco",
          zipcode: "94102",
          state: "California",
          country: "US",
          timezone: "America/Los_Angeles",
          google_mid: "/g/11hcdwbfxd",
        },
      },
      {
        event_id:
          "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI1LTA0LTI1fDU3MjQ2MTYyNjA3NDEyNjYwMzY=",
        name: "Spice",
        link: "https://open.spotify.com/concert/2Q1dAy5zKtfOIGOo1d7EEg",
        description:
          "Find tickets for SPICE with Aku, DJ SUDI and Falcons at 1015 Folsom in San Francisco on 4/25/2025 at 10:00 PM",
        language: "en",
        date_human_readable: "Fri, Apr 25, 10 PM – Sat, Apr 26, 2 AM PDT",
        start_time: "2025-04-25 22:00:00",
        start_time_utc: "2025-04-26 05:00:00",
        start_time_precision_sec: 1,
        end_time: "2025-04-26 02:00:00",
        end_time_utc: "2025-04-26 09:00:00",
        end_time_precision_sec: 1,
        is_virtual: false,
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr_Z2tnspmKpY-eRqDWrAiURhYqrSxNTBO9Nl7y5JigdURrFl376zUpQrodw&s=10",
        publisher: "Spotify.com",
        publisher_favicon:
          "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://open.spotify.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        publisher_domain: "open.spotify.com",
        ticket_links: [
          {
            source: "Spotify.com",
            link: "https://open.spotify.com/concert/2Q1dAy5zKtfOIGOo1d7EEg",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://spotify.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Ticketsqueeze.com",
            link: "https://www.ticketsqueeze.com/tickets/7027917/spice-2025-04-25-22-00-00-1015-folsom-nightclub",
            fav_icon:
              "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://ticketsqueeze.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "DoTheBay",
            link: "https://dothebay.com/events/2025/4/25/spice-tickets",
            fav_icon:
              "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://dothebay.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "KRON4",
            link: "https://www.kron4.com/community/calendar/?_escaped_fragment_=/show/?start=2023-02-20#!/details/spice-21-event-/15507424/2025-04-25T22",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://kron4.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "SFGATE",
            link: "https://www.sfgate.com/thingstodo/?_evDiscoveryPath=/event/1034453761n-spice",
            fav_icon:
              "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://sfgate.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
        ],
        info_links: [
          {
            source: "Spotify.com",
            link: "https://open.spotify.com/concert/7vo4dvtXW0VQ6ZKHu8p6ac",
          },
        ],
        venue: {
          google_id: "0x8085808197e10547:0x6fd616f55e58c728",
          name: "1015 Folsom",
          phone_number: "+14157923256",
          website: "http://1015.com",
          review_count: 450,
          rating: 3.5,
          subtype: "Night club",
          subtypes: ["Night club", "Bar", "Live music venue"],
          full_address: "1015 Folsom, 1015 Folsom St, San Francisco, CA 94103",
          latitude: 37.7781117,
          longitude: -122.4058001,
          district: "SoMa",
          street_number: "1015",
          street: "1015 Folsom St",
          city: "San Francisco",
          zipcode: "94103",
          state: "California",
          country: "US",
          timezone: "America/Los_Angeles",
          google_mid: "/m/0k5329c",
        },
      },
      {
        event_id:
          "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI1LTA2LTE1fDE2ODQyNjgzNTc0ODU5NDc0ODAz",
        name: "Chamber Series - Davies Symphony Hall",
        link: "https://bachtrack.com/concert-event/chamber-music-at-davies-symphony-hall-davies-symphony-hall-15-june-2025/407719",
        description:
          "Dates/times in Los Angeles time zone Sunday 15 June 2025 14:00",
        language: "en",
        date_human_readable: "Sun, Jun 15, 2:00 – 3:30 PM PDT",
        start_time: "2025-06-15 14:00:00",
        start_time_utc: "2025-06-15 21:00:00",
        start_time_precision_sec: 1,
        end_time: "2025-06-15 15:30:00",
        end_time_utc: "2025-06-15 22:30:00",
        end_time_precision_sec: 1,
        is_virtual: false,
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgBVvGetYonL6XL7HLtfhQjPL4cN60BDSziEdMhlKs6A&s=10",
        publisher: "Bachtrack.com",
        publisher_favicon:
          "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://bachtrack.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        publisher_domain: "bachtrack.com",
        ticket_links: [
          {
            source: "Axs.com",
            link: "https://www.axs.com/events/890719/chamber-series-davies-symphony-hall-tickets",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://axs.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Gametime.co",
            link: "https://gametime.co/music/chamber-series-davies-symphony-hall-tickets/6-15-2025-san-francisco-ca-davies-symphony-hall/events/66b12f074630e3640c62b323",
            fav_icon:
              "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://gametime.co&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Vividseats.com",
            link: "https://www.vividseats.com/chamber-series---davies-symphony-hall-tickets-san-francisco-davies-symphony-hall-6-15-2025--concerts-classical/production/4879633",
            fav_icon:
              "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://vividseats.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Bachtrack",
            link: "https://bachtrack.com/concert-event/chamber-music-at-davies-symphony-hall-davies-symphony-hall-15-june-2025/407719",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://bachtrack.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Hellotickets",
            link: "https://www.hellotickets.ae/us/san-francisco/concerts/san-francisco-symphony-chamber-music-tickets/121858",
            fav_icon:
              "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://hellotickets.ae&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
        ],
        info_links: [
          {
            source: "Bachtrack.com",
            link: "https://bachtrack.com/concert-event/chamber-music-at-davies-symphony-hall-davies-symphony-hall-15-june-2025/407719",
          },
        ],
        venue: {
          google_id: "0x808580991be02fd9:0xc60bb460e5f31987",
          name: "Louise M. Davies Symphony Hall",
          phone_number: "+14158646000",
          website: "https://www.sfsymphony.org",
          review_count: 503,
          rating: 4.8,
          subtype: "Concert hall",
          subtypes: ["Concert hall"],
          full_address:
            "Louise M. Davies Symphony Hall, 201 Van Ness Ave, San Francisco, CA 94102",
          latitude: 37.7779294,
          longitude: -122.42080879999999,
          district: "Civic Center",
          street_number: "201",
          street: "201 Van Ness Ave",
          city: "San Francisco",
          zipcode: "94102",
          state: "California",
          country: "US",
          timezone: "America/Los_Angeles",
          google_mid: "/g/11hcdwbfxd",
        },
      },
      {
        event_id:
          "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI1LTA0LTE2fDczODY5MzAyNjQ3OTU3NTI0ODI=",
        name: "Orianthi",
        link: "https://open.spotify.com/concert/34KOjwm8jXyujr7zsP1efU",
        description:
          "Find tickets for Orianthi at Yoshi's Oakland in Oakland on 4/16/2025 at 8:00 PM",
        language: "en",
        date_human_readable: "Wed, Apr 16, 8 PM – Fri, Apr 18, 12 AM PDT",
        start_time: "2025-04-16 20:00:00",
        start_time_utc: "2025-04-17 03:00:00",
        start_time_precision_sec: 1,
        end_time: "2025-04-18 00:00:00",
        end_time_utc: "2025-04-18 07:00:00",
        end_time_precision_sec: 1,
        is_virtual: false,
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjfsuwAmJMUNp9rzs_w_G2cugFTvXo7itez67DmZ3LSnE8lBLRg2bFKxy4EQ&s=10",
        publisher: "Spotify.com",
        publisher_favicon:
          "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://open.spotify.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        publisher_domain: "open.spotify.com",
        ticket_links: [
          {
            source: "Spotify.com",
            link: "https://open.spotify.com/concert/34KOjwm8jXyujr7zsP1efU",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://spotify.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Axs.com",
            link: "https://www.axs.com/uk/events/923603/orianthi-tickets",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://axs.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Yoshis.com",
            link: "https://yoshis.com/events/buy-tickets/orianthi-2/detail",
            fav_icon:
              "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://yoshis.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Etix.com",
            link: "https://www.etix.com/ticket/p/72150759/orianthi-oakland-yoshis",
            fav_icon:
              "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://etix.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "DoTheBay",
            link: "https://dothebay.com/events/2025/4/17/orianthi-tickets",
            fav_icon:
              "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://dothebay.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
        ],
        info_links: [
          {
            source: "Spotify.com",
            link: "https://open.spotify.com/concert/34KOjwm8jXyujr7zsP1efU",
          },
        ],
        venue: {
          google_id: "0x808f80c78c8d21c7:0x97d406c1dd46c63e",
          name: "Yoshi's",
          phone_number: "+15102389200",
          website: "http://www.yoshis.com",
          review_count: 3142,
          rating: 4.6,
          subtype: "Japanese restaurant",
          subtypes: [
            "Japanese restaurant",
            "Asian restaurant",
            "Bar",
            "Event venue",
            "Jazz club",
            "Restaurant",
            "Sushi restaurant",
          ],
          full_address: "Yoshi's, 510 Embarcadero West, Oakland, CA 94607",
          latitude: 37.7963889,
          longitude: -122.2788889,
          district: "Produce and Waterfront",
          street_number: "510",
          street: "510 Embarcadero West",
          city: "Oakland",
          zipcode: "94607",
          state: "California",
          country: "US",
          timezone: "America/Los_Angeles",
          google_mid: "/m/03gwbgv",
        },
      },
      {
        event_id:
          "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI1LTA0LTE4fDU5MzM3MzY5MTE0NjAzNTYzMDA=",
        name: "6LACK",
        link: "https://open.spotify.com/artist/4IVAbR2w4JJNJDDRFP3E83/concerts",
        description:
          "Buy 6LACK tickets with Spotify. Find 6LACK tour schedule, concert details, and tickets.",
        language: "en",
        date_human_readable: "Fri, Apr 18, 10 PM – Sat, Apr 19, 2 AM PDT",
        start_time: "2025-04-18 22:00:00",
        start_time_utc: "2025-04-19 05:00:00",
        start_time_precision_sec: 1,
        end_time: "2025-04-19 02:00:00",
        end_time_utc: "2025-04-19 09:00:00",
        end_time_precision_sec: 1,
        is_virtual: false,
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw19lL2jSvnQyDSQnPn1tZ6Pot5l8FtNepexo9FxOkJg&s=10",
        publisher: "Spotify.com",
        publisher_favicon:
          "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://open.spotify.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        publisher_domain: "open.spotify.com",
        ticket_links: [
          {
            source: "Spotify.com",
            link: "https://open.spotify.com/concert/42vGM1jnfTwpF8K5MOQB0f",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://spotify.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Eventbrite.com",
            link: "https://www.eventbrite.com/e/1307520863099",
            fav_icon:
              "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://eventbrite.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Tixr",
            link: "https://tixr.com/e/136626",
            fav_icon:
              "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://tixr.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "AllEvents",
            link: "https://allevents.in/san%20francisco/6lack/100001307520863099",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://allevents.in&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Edmtrain",
            link: "https://edmtrain.com/tours/6lack-17497",
            fav_icon:
              "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://edmtrain.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
        ],
        info_links: [
          {
            source: "Spotify.com",
            link: "https://open.spotify.com/artist/4IVAbR2w4JJNJDDRFP3E83/concerts",
          },
        ],
        venue: {
          google_id: "0x8085810ff37604bf:0x730ce95dc0240040",
          name: "Temple Nightclub San Francisco",
          phone_number: "+14156969512",
          website: "http://www.templesf.com",
          review_count: 658,
          rating: 3.1,
          subtype: "Night club",
          subtypes: [
            "Night club",
            "Bar",
            "Dance club",
            "Event venue",
            "Lounge",
            "Musical club",
            "Yoga studio",
          ],
          full_address:
            "Temple Nightclub San Francisco, 540 Howard St, San Francisco, CA 94105",
          latitude: 37.7879638,
          longitude: -122.3972312,
          district: "SoMa",
          street_number: "540",
          street: "540 Howard St",
          city: "San Francisco",
          zipcode: "94105",
          state: "California",
          country: "US",
          timezone: "America/Los_Angeles",
          google_mid: "/g/11sw0_lvs2",
        },
      },
      {
        event_id:
          "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI1LTA0LTI3fDQ0OTY0NzMyMzI0NTE4Nzc1NTY=",
        name: "Chamber Series - Davies Symphony Hall",
        link: "https://ggu.edu/event/commencement-ceremony/",
        description:
          "The Golden Gate University Commencement Ceremony will take place April 27, 2025 from 8pm to 10pm at Louise M. Davies Symphony Hall in San Francisco.",
        language: "en",
        date_human_readable: "Sun, Apr 27, 2:00 – 3:30 PM PDT",
        start_time: "2025-04-27 14:00:00",
        start_time_utc: "2025-04-27 21:00:00",
        start_time_precision_sec: 1,
        end_time: "2025-04-27 15:30:00",
        end_time_utc: "2025-04-27 22:30:00",
        end_time_precision_sec: 1,
        is_virtual: false,
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd-qGzQzZQsM1bGDzhwKMNUZno0nVsOnOcSHaI0_FHRfHvXOVRn1Zhkxt4_Q&s=10",
        publisher: "Ggu.edu",
        publisher_favicon:
          "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://ggu.edu&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        publisher_domain: "ggu.edu",
        ticket_links: [
          {
            source: "Axs.com",
            link: "https://www.axs.com/au/events/596960/chamber-series-davies-symphony-hall-tickets",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://axs.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Ticketsqueeze.com",
            link: "https://www.ticketsqueeze.com/tickets/6348596/members-of-the-san-francisco-symphony-chamber-music-2025-04-27-14-00-00-davies-symphony-hall",
            fav_icon:
              "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://ticketsqueeze.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Stubhub.com",
            link: "https://www.stubhub.com/_C-150066031?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-2016%7Cev-153741992%7Ccy-79823&ps_ev=153741992",
            fav_icon:
              "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://stubhub.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Viagogo.com",
            link: "https://www.viagogo.com/_C-150066031?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-2016%7Cev-153741992%7Ccy-79823&ps_ev=153741992",
            fav_icon:
              "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://viagogo.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Gametime.co",
            link: "https://gametime.co/music/chamber-series-davies-symphony-hall-tickets/4-27-2025-san-francisco-ca-davies-symphony-hall/events/66a7ec8065348e131fd12e87",
            fav_icon:
              "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://gametime.co&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
        ],
        info_links: [
          {
            source: "Ggu.edu",
            link: "https://ggu.edu/event/commencement-ceremony/",
          },
        ],
        venue: {
          google_id: "0x808580991be02fd9:0xc60bb460e5f31987",
          name: "Louise M. Davies Symphony Hall",
          phone_number: "+14158646000",
          website: "https://www.sfsymphony.org",
          review_count: 503,
          rating: 4.8,
          subtype: "Concert hall",
          subtypes: ["Concert hall"],
          full_address:
            "Louise M. Davies Symphony Hall, 201 Van Ness Ave, San Francisco, CA 94102",
          latitude: 37.7779294,
          longitude: -122.42080879999999,
          district: "Civic Center",
          street_number: "201",
          street: "201 Van Ness Ave",
          city: "San Francisco",
          zipcode: "94102",
          state: "California",
          country: "US",
          timezone: "America/Los_Angeles",
          google_mid: "/g/11hcdwbfxd",
        },
      },
      {
        event_id:
          "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI1LTA2LTA2fDEyODUwMTEyNzkxMTk3NjIyNjEz",
        name: "CupcakKe",
        link: "https://open.spotify.com/concert/3X5qAEZWMr1pXKtzDtfaZg",
        description:
          "Find tickets for cupcakKe at Temple Nightclub in SF on 6/6/2025 at 10:00 PM",
        language: "en",
        date_human_readable: "Fri, Jun 6, 10 PM – Sat, Jun 7, 1 AM PDT",
        start_time: "2025-06-06 22:00:00",
        start_time_utc: "2025-06-07 05:00:00",
        start_time_precision_sec: 1,
        end_time: "2025-06-07 01:00:00",
        end_time_utc: "2025-06-07 08:00:00",
        end_time_precision_sec: 1,
        is_virtual: false,
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbUh_48IIQ0wCgxvTswSwyUpZKmBccaRAY4iGIaWCj27EBMR1WKX48zXufTA&s=10",
        publisher: "Spotify.com",
        publisher_favicon:
          "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://open.spotify.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        publisher_domain: "open.spotify.com",
        ticket_links: [
          {
            source: "Spotify.com",
            link: "https://open.spotify.com/concert/3X5qAEZWMr1pXKtzDtfaZg",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://spotify.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Axs.com",
            link: "https://www.axs.com/events/906904/cupcakke-21-event-tickets",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://axs.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Bandsintown.com",
            link: "https://www.bandsintown.com/e/1034722071?app_id=ggl_feed&came_from=289&utm_medium=web&utm_source=ggl_feed&utm_campaign=event",
            fav_icon:
              "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://bandsintown.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Stubhub.com",
            link: "https://www.stubhub.com/_C-70973?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-97589%7Cev-157608403%7Ccy-79823&ps_ev=157608403",
            fav_icon:
              "https://encrypted-tbn1.gstatic.com/faviconV2?url=https://stubhub.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Viagogo.com",
            link: "https://www.viagogo.com/_C-70973?pcid=PSUSAEVECONALLEF426C5CF9E&ps_p=8&ps_placement=eventfeed&ps=vn-97589%7Cev-157608403%7Ccy-79823&ps_ev=157608403",
            fav_icon:
              "https://encrypted-tbn0.gstatic.com/faviconV2?url=https://viagogo.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
        ],
        info_links: [
          {
            source: "Spotify.com",
            link: "https://open.spotify.com/concert/3X5qAEZWMr1pXKtzDtfaZg",
          },
        ],
        venue: {
          google_id: "0x8085810ff37604bf:0x730ce95dc0240040",
          name: "Temple Nightclub San Francisco",
          phone_number: "+14156969512",
          website: "http://www.templesf.com",
          review_count: 658,
          rating: 3.1,
          subtype: "Night club",
          subtypes: [
            "Night club",
            "Bar",
            "Dance club",
            "Event venue",
            "Lounge",
            "Musical club",
            "Yoga studio",
          ],
          full_address:
            "Temple Nightclub San Francisco, 540 Howard St, San Francisco, CA 94105",
          latitude: 37.7879638,
          longitude: -122.3972312,
          district: "SoMa",
          street_number: "540",
          street: "540 Howard St",
          city: "San Francisco",
          zipcode: "94105",
          state: "California",
          country: "US",
          timezone: "America/Los_Angeles",
          google_mid: "/g/11sw0_lvs2",
        },
      },
      {
        event_id:
          "L2F1dGhvcml0eS9ob3Jpem9uL2NsdXN0ZXJlZF9ldmVudC8yMDI1LTA3LTE5fDQ5MTc3MTE2MjgwMjgzNTM4OTQ=",
        name: "Paul Simon",
        link: "https://open.spotify.com/concert/3fNbB3WylyMC2enw8AznA8",
        description:
          "Find tickets for Paul Simon at Louise M. Davies Symphony Hall in San Francisco on 7/19/2025 at 8:00 PM",
        language: "en",
        date_human_readable: "Sat, Jul 19, 8 PM – Tue, Jul 22, 1 PM PDT",
        start_time: "2025-07-19 20:00:00",
        start_time_utc: "2025-07-20 03:00:00",
        start_time_precision_sec: 1,
        end_time: "2025-07-22 13:00:00",
        end_time_utc: "2025-07-22 20:00:00",
        end_time_precision_sec: 1,
        is_virtual: false,
        thumbnail:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpFi-1N3oKtW5s7xeEnbSJodvzmcLNpwcTjOGeMO2hDjNLHsX9QFH-EesJYA&s=10",
        publisher: "Spotify.com",
        publisher_favicon:
          "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://open.spotify.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        publisher_domain: "open.spotify.com",
        ticket_links: [
          {
            source: "Spotify.com",
            link: "https://open.spotify.com/concert/3fNbB3WylyMC2enw8AznA8",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://spotify.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "Axs.com",
            link: "https://www.axs.com/uk/events/866621/paul-simon-tickets",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://axs.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "San Francisco Theater",
            link: "https://www.san-francisco-theater.com/dates/2025/07/category/top-seller",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://san-francisco-theater.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "DoTheBay",
            link: "https://dothebay.com/events/2025/7/19/paul-simon-in-concert-tickets",
            fav_icon:
              "https://encrypted-tbn3.gstatic.com/faviconV2?url=https://dothebay.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
          {
            source: "KRON4",
            link: "https://www.kron4.com/community/calendar/?_escaped_fragment_=/show/?start=2023-10-28#!/details/paul-simon/15188111/2025-07-19T20",
            fav_icon:
              "https://encrypted-tbn2.gstatic.com/faviconV2?url=https://kron4.com&client=HORIZON&size=96&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
          },
        ],
        info_links: [
          {
            source: "Spotify.com",
            link: "https://open.spotify.com/concert/3fNbB3WylyMC2enw8AznA8",
          },
        ],
        venue: {
          google_id: "0x808580991be02fd9:0xc60bb460e5f31987",
          name: "Louise M. Davies Symphony Hall",
          phone_number: "+14158646000",
          website: "https://www.sfsymphony.org",
          review_count: 503,
          rating: 4.8,
          subtype: "Concert hall",
          subtypes: ["Concert hall"],
          full_address:
            "Louise M. Davies Symphony Hall, 201 Van Ness Ave, San Francisco, CA 94102",
          latitude: 37.7779294,
          longitude: -122.42080879999999,
          district: "Civic Center",
          street_number: "201",
          street: "201 Van Ness Ave",
          city: "San Francisco",
          zipcode: "94102",
          state: "California",
          country: "US",
          timezone: "America/Los_Angeles",
          google_mid: "/g/11hcdwbfxd",
        },
      },
    ],
  };

  //   const position = [37.7749, -122.4194];
  // const x = event.data.map((e)=> e.venue.latitude)
  // const y = event.data.map((e)=> e.venue.longitude)
  // const position = [x, y];
  //   console.log(position);
  return (
    <div  style={{ justifyContent: "center" }}>
      {/* <input
        style={{}}
        id="input"
        value={searchTerm}
        onChange={handleChange}
        // onChange={((e)=> setSearchTerm(e.target.value))}
        type="search"
        placeholder="search eg: concerts in chicogo"
        align="center"
      ></input> */}
      {/* <button onClick={handleChange} className="btn btn-primary">
        search
      </button> */}

      {/* this is main */}




      <div className="ntotal" style={{display: 'flex' }} >
        <div className="n2total" >

          this is card
          {event.data.map((e) => (
          <div className="list">
            <div className="div1">
              <img src={e.thumbnail} />
            </div>

            <div className="div2">
              <h6>{e.name} ⭐ {e.venue.rating}</h6> 
              <> Event Date&Timings: {e.date_human_readable} </>
              {/* <p>{e.description}</p> */}
              <br />
              <>{e.venue.street}, {e.venue.city}</>

              {/* <b> address: {e.venue.full_address}</b> */}
            </div>
          </div>
        ))}


        </div>

        <div className="nmap"  >
          map
          <div className="map" style={{ height: "100vh", width: "150%",  }} >
        {/* style={{ height: "100vh", width: "100%" }} */}
          <MapContainer
            center={[41.464355454312326, -89.36740428631279]}
            zoom={4}
            style={{ height: "100%", width: "150%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {event.data.map((e, index) => (
              <Marker
                key={e.event_id}
                position={[e.venue.latitude, e.venue.longitude]}
                icon={customIcon}
              >
                {/* [13.8203, 79.3353] */}
                <Popup>
                  <div class="card" style={{ width: "18rem" }}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{e.name}</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href={e.link} class="btn btn-primary">
                        book ticket
                      </a>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
        </div>
      </div>

      {/* this is wnd */}





      <div className="now">
        {/* {event.data.map((e) => ( */}
          {/* <div className="list">
            <div className="div1">
              <img src={e.thumbnail} />
            </div>

            <div className="div2">
              <h6>{e.name}</h6>
              <b> Event Date&Timings: {e.date_human_readable} </b>
              {/* <p>{e.description}</p> */}
              {/* <br />
              <b> address: {e.venue.full_address}</b>
            </div> */}
          {/* </div> */} 
        {/* ))} */}
        </div>

        <div >
        <div className="map" style={{ height: "100vh", width: "100%", float:"left" }} >
        {/* style={{ height: "100vh", width: "100%" }} */}
          <MapContainer
            center={[41.464355454312326, -89.36740428631279]}
            zoom={4}
            style={{ height: "100%", width: "50%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {event.data.map((e, index) => (
              <Marker
                key={e.event_id}
                position={[e.venue.latitude, e.venue.longitude]}
                icon={customIcon}
              >
                {/* [13.8203, 79.3353] */}
                <Popup>
                  <div class="card" style={{ width: "18rem" }}>
                    <img src="..." class="card-img-top" alt="..." />
                    <div class="card-body">
                      <h5 class="card-title">{e.name}</h5>
                      <p class="card-text">
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </p>
                      <a href={e.link} class="btn btn-primary">
                        book ticket
                      </a>
                    </div>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
      hhrhrh
      {user?.results[0]?.name}
    </div>
    // <div className="form-container">
    //   <form className="form-box">
    //     <input type="text" placeholder="Email" />
    //     <input type="password" placeholder="Password" />
    //     <button type="submit">Login</button>
    //   </form>
    // </div>
  );
}

export default Addevent;
