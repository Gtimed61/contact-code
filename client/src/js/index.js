import "./form";
import "./submit";
import { Tooltip, Toast, Popover } from "bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog  from '../images/dog.png';

//import CSS files
import '../css/index.css';

// Add images on load
window.addEventListener('load', function () {
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
  });

import { initDb, getDb, postDb } from "./database.js";

  window.addEventListener('load', function () {
    initDb();
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;

    getDb();
    postDb("Lernantino", "learnantino@test.com", 8186601234, "Bear");
    getDb();
});


