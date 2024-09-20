import { Button, Navbar } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Head() {
  return (
    <Navbar className="border-b-2 bg-amber-600">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span
          className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-red-500 to-indigo-600 rounded-lg text-white"
          gradient
        >
          EW
        </span>
        K
      </Link>
      <div className="flex gap-3 self-end">
        <Link to="/home">
          <Button gradientDuoTone="tealToLime">Strona Główna</Button>
        </Link>
        <Link to="/drukarki">
          <Button gradientDuoTone="tealToLime">Drukarki</Button>
        </Link>
        <Link to="/komputery">
          <Button gradientDuoTone="tealToLime">Komputery</Button>
        </Link>
        <Link to="/home">
          <Button gradientDuoTone="tealToLime">Ewidencja</Button>
        </Link>
        <Link></Link>
      </div>
    </Navbar>
  );
}
