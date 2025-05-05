import React, { useContext, useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import axios from "axios";
// import Cookies from "js-cookie";
import L from "leaflet";
import "./Como.css";
import axios from "axios";
import { useLocation } from "react-router";
import { AuthContext } from "./AuthContext";

function Home() {
  const position = [51.505, -0.09];
  const [isOpen, setIsOpen] = useState(false);
  const { user, napi, setnapi } = useContext(AuthContext);

  const [used, setused] = useState([]);
  const [search, setsearch] = useState("Concerts in chicago");
  const [searchTerm, setSearchTerm] = useState("Concerts in chicago");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  const [event, setevent] = useState([]);
  const location = useLocation();

  console.log(event);
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
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 100);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchEvents(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchEvents = async (searchTerm) => {
    const options = {
      method: "GET",
      url: `https://real-time-events-search.p.rapidapi.com/search-events`,
      params: {
        query: searchTerm,
        date: "any",
        is_virtual: "false",
        start: "0",
      },
      headers: {
        "x-rapidapi-key": "9805811889msh4cb485d2dce57cap172266jsna4bb0a29ade5",
        "x-rapidapi-host": "real-time-events-search.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setevent(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(async () => {
  //   // axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${search}`).then((res)=>console.log(res))
  //   // // axios.get("http://localhost:3001/users/verify").then(res => {
  //   // //      if(res.data.Status == 'success')
  //   // //        setAuth(true);
  //   // //      setname(res.data.name);
  //   // //  })
  //   const options = {
  //       method: 'GET',
  //       url: `https://real-time-events-search.p.rapidapi.com/search-events`,
  //       params: {
  //         query: 'Concerts in chicago',
  //         // query: {search,
  //         date: 'any',
  //         is_virtual: 'false',
  //         start: '0'
  //       },
  //       headers: {
  //         'x-rapidapi-key': '4d16749696msh51e126324a40fedp150564jsn4fbb3897bd49',
  //         'x-rapidapi-host': 'real-time-events-search.p.rapidapi.com'
  //       }
  //     };
  //   try {
  //       const response = await axios.request(options);
  //       console.log(response.data);
  //       setevent(response.data);
  //       // setnapi(response.data);
  //   } catch (error) {
  //       console.error(error);
  //   }

  // //   const url =
  // //     `https://real-time-events-search.p.rapidapi.com/search-events?query=${search}&date=any&is_virtual=false&start=0`;
  // //   const options = {
  // //     method: "GET",
  // //     headers: {
  // //       "x-rapidapi-key": "4d16749696msh51e126324a40fedp150564jsn4fbb3897bd49",
  // //       "x-rapidapi-host": "real-time-events-search.p.rapidapi.com",
  // //     },
  // //   };

  // //   try {
  // //     const response = await fetch(url, options);
  // //     const result = await response.text();
  // //     console.log(re);
  // //     setevent(result)
  // //   } catch (error) {
  // //     console.error(error);
  // //   }
  // // }, [search]);

  // // const handleChange = (e) => {
  // //   setSearchTerm(e.target.value);
  // //   console.log(debouncedTerm);
  // // };
  // // useEffect(() => {
  // //   const timer = setTimeout(() => {
  // //     setDebouncedTerm(searchTerm);

  // //     const options = {
  // //           method: 'GET',
  // //           url: 'https://real-time-events-search.p.rapidapi.com/search-events',
  // //           params: {
  // //             query: {debouncedTerm},
  // //             date: 'any',
  // //             is_virtual: 'false',
  // //             start: '0'
  // //           },
  // //           headers: {
  // //             'x-rapidapi-key': '4d16749696msh51e126324a40fedp150564jsn4fbb3897bd49',
  // //             'x-rapidapi-host': 'real-time-events-search.p.rapidapi.com'
  // //           }
  // //         };

  // //         try {
  // //             const response = axios.request(options);
  // //             console.log(response.data);
  // //             setevent(response.data);
  // //             setnapi(response.data);
  // //         } catch (error) {
  // //             console.error(error);
  // //         }
  // //     console.log("this is before debpunce", debouncedTerm);
  // //   }, 500); // waits 500ms after user stops typing
  // //   console.log("this is after  debpunce", debouncedTerm);

  // //   return () => {
  // //     clearTimeout(timer); // Clear previous timer on each key press
  // //   };
  // }, [debouncedTerm]);

  return (
    <div className="hello" >
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav> */}

      <nav>
        <h4>app name</h4>

        <ul>
          <li>
            <a href="/home">home</a>
          </li>
          <li>
            <a onClick={toggleDropdown} className="dropbtn">
              Menu{" "}
            </a>
            {isOpen && (
              <div className="dropdown-content">
                {/* <a href="/addevent">addevent</a> */}
                <a href="https://www.crimemapping.com/Share/66dfeeb3d9874dc78fdf8be1ad7f0c4c">crime reporting</a>
                {/* <a href="/about">About</a>
                <a href="/profile">Profile</a> */}
              </div>
            )}
          </li>
          <li>
            {/* <a href="/logout">logout</a>{" "} */}
          </li>
        </ul>
      </nav>

      <input className="in"
        type="search"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search events..."
      ></input>


       <div className="ntotal" style={{display: 'flex' }} >
              <div className="n2total" >
      
                this is card
                {event.data?.map((e) => (
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
      
                  {event.data?.map((e, index) => (
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
      

      {/* <div className="now">
        <div> */}
          {/* <input
          id="input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          placeholder="search eg: concerts in chicogo"
          align="center"
        ></input> */}
          {/* <button onClick={handleChange} className="btn btn-primary">
            search
          </button> */}
          {/* {event.data?.map((e) => (
            <div className="list">
              <div className="div1">
                <img src={e.thumbnail} alt="this is img" />
              </div>

              <div className="div2">
                <h6>{e.name}</h6>
                <b> Event Date&Timings: {e.date_human_readable} </b>
                {/* <p>{e.description}</p> */}
                {/* <br />
                <b> address: {e.venue.full_address}</b>
              </div>
            </div>
          ))}
        </div> */}

        {/* <div>  */}
          {" "}
          {/* <div className="map" style={{ height: "100vh", width: "100%" }}>
            <MapContainer
              center={[38.7946, -95.844032]}
              zoom={7}
              style={{ height: "50%", width: "80%" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              /> */}

              {/* {event.data?.map((e, index) => (
                <Marker
                  key={e.event_id}
                  position={[e.venue.latitude, e.venue.longitude]}
                  icon={customIcon}
                > */}
                  {/* [13.8203, 79.3353] */}
                  {/* <Popup>
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
          </div>{" "}
        </div>
      </div> */}
      {/* {this is} */}

    </div>
  );
}

export default Home;
