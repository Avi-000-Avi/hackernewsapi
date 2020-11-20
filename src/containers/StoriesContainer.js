import React, {useEffect, useState, memo} from 'react';
import {getStoryIds } from '../services/hnApi';
import {Story} from '../components/Story';
import {GlobalStyle, StoriesContainerWrapper}  from '../styles/StoriesContainerStyles';
import {useInfiniteScroll} from '../hooks/useInfiniteScroll';


export const StoriesContainer = () => { 
  const {count} = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]); 

  useEffect(() => { 
    /*Resolving the promise */
    /*Get the ids/data and set it to storyIds */
    getStoryIds().then(data => setStoryIds(data));
    console.log('count',count);
  }, [count]);

/*For every story component we are going to pass a storyId prop/Mapping the storyids to all story components */
  return (
  <>
  <GlobalStyle/>
  <StoriesContainerWrapper data-test-id="stories-container">
  <h1>Hacker News Stories</h1>
  {storyIds.slice(0, count).map(storyId => (
  <Story key ={storyId} storyId={storyId} />
  ))}
  </StoriesContainerWrapper>
  </>
  );
};
  