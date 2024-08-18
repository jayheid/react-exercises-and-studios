import React from 'react';
import classes from './ChoresList.module.css';

export default function ChoresList () {
   return (
   <div>
      <h3 className = {classes.choresHeading}>Chores Remaining</h3>
      <ol>
         <li className = {classes.choresText}>Clean Dishes</li>
         <li className = {classes.choresText}>Sweep Floor</li>
         <li className = {classes.choresText}>Walk Dogs</li>
      </ol>
   </div>
   );
}