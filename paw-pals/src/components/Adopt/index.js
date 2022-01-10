import React from "react";
import "./style.css";

function Adopt() {
  return (
    <div>
      <h1 className='adoption-header'>Adoption Resources</h1>
      <p className='adoption-paragraph'>
        <strong>Hello!</strong> Are you looking to adopt a best friend for the
        first time or adding another buddy to your crew, I know if it was up to
        me I would adopt all the dogs, my allergies would not be happy, and my
        girlfriend might think I was crazy. Here you will find links to various
        local animal shelters, and adoption sites. Please follow local health
        ordinances, wear a mask, get vaccinated or boosted, and follow all
        shelter policies.{" "}
      </p>
      <h2 className='animal-shelter-links-header'>Links to Animal Shelters</h2>
      <ol className='animal-shelter-list'>
        <li animal-shelter-list-item>
          <p className='animal-shelter-list-paragraph'>
            The Denver Animal Shelter is operated by the local government, has
            various resources available to potential adoptees.
          </p>
          <a
            className='animal-shelter-link'
            href='http://www.denveranimalshelter.org/'>
            Denver Animal Shelter
          </a>
        </li>
        <hr></hr>
        <li animal-shelter-list-item>
          <p className='animal-shelter-list-paragraph'>
            Denver Dumb Friends League is one of the oldest animal shelters in
            the metro area, I've adopted from here and highly recommend it.
          </p>
          <a className='animal-shelter-link' href='http://www.ddfl.org/'>
            Denver Dumb Friends League
          </a>
        </li>
        <hr></hr>
        <li animal-shelter-list-item>
          <p className='animal-shelter-list-paragraph'>
            MaxFund Animal Adoption Center is a true No Kill animal shelter that
            specializes in special needs dogs
          </p>
          <a
            className='animal-shelter-link'
            href='https://www.maxfund.org/locationhours/'>
            MaxFund Animal Adoption Center
          </a>
        </li>
        <hr></hr>
        <li animal-shelter-list-item>
          <p className='animal-shelter-list-paragraph'>
            Friend of Jack is a foster based animal rescue in the metro area,
            foster a dog or adopt one for yourself, we love foster fails here at
            Puppy Pals
          </p>
          <a
            className='animal-shelter-link'
            href='http://friendofjackrescue.com/'>
            Friend of Jack Rescue
          </a>
        </li>
        <hr></hr>
        <li animal-shelter-list-item>
          <p className='animal-shelter-list-paragraph'>
            PawsCO is a Denver based animal rescue that partners with food bank
            of the rockies to keep our furry friends fed, as well as find them
            homes
          </p>
          <a className='animal-shelter-link' href='http://pawsco.org/'>
            PawsCO
          </a>
        </li>
        <hr></hr>
        <li animal-shelter-list-item>
          <p className='animal-shelter-list-paragraph'>
            The Colorado Humane Society is part of the DDFL, plenty of puppies,
            and dogs for adoption.
          </p>
          <a className='animal-shelter-link' href='http://coloradohumane.org/'>
            Colorado Humane Society
          </a>
        </li>
        <hr></hr>
        <li animal-shelter-list-item>
          <p className='animal-shelter-list-paragraph'>
            Animal rescue based in the Golden area, they have found lots of
            homes for their pups!
          </p>
          <a
            className='animal-shelter-link'
            href='http://www.foothillsanimalshelter.org/'>
            Foothills Animal Shelter
          </a>
        </li>
        <hr></hr>
        <li animal-shelter-list-item>
          <p className='animal-shelter-list-paragraph'>
            The Life is Better Rescue is based in Lakewood, volunteer to foster
            a pup, or adopt one of your own
          </p>
          <a
            className='animal-shelter-link'
            href='https://lifeisbetterrescue.org/'>
            Life Is Better Rescue
          </a>
        </li>
        <hr></hr>
        <li animal-shelter-list-item>
          <p className='animal-shelter-list-paragraph'>
            Colorado Puppy Rescue is an event based adoption service, sign up
            for one of their events
          </p>
          <a
            className='animal-shelter-link'
            href='http://www.coloradopuppy.org/'>
            Colorado Puppy Rescue
          </a>
        </li>
        <hr></hr>
        <li animal-shelter-list-item>
          <p className='animal-shelter-list-paragraph'>
            Non profit animal rescue based in Denver, that uses a very simple
            adoption process.
          </p>
          <a
            className='animal-shelter-link'
            href='http://www.dogrescuecolorado.org/'>
            My Fairy Dawg Mother
          </a>
        </li>
      </ol>
    </div>
  );
}

export default Adopt;
