import React, {useEffect, useState} from 'react';
import {getStoryIds } from '../services/hnApi';
import {Story} from '../components/Story';
import {GlobalStyle, StoriesContainerWrapper}  from '../styles/StoriesContainerStyles';

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]); 

  useEffect(() => { 
    /*Resolving the promise */
    /*Get the ids/data and set it to storyIds */
    /*why is this inside of useEffect */
    getStoryIds().then(data => setStoryIds(data));
}, []);

/*For every story component we are going to pass a storyId prop/Mapping the storyids to all story components */
  return (
  <>
  <GlobalStyle/>
  <StoriesContainerWrapper data-test-id="stories-container">
  <h1>Hacker News Stories</h1>
  {storyIds.map(storyId => 
  <Story key ={storyId} storyId={storyId} />
  )}
  </StoriesContainerWrapper>
  </>
  );
};
  