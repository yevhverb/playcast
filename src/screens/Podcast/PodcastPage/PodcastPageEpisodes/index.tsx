import { useMemo } from 'react';
import { slice } from 'lodash';
import { useMediaQuery } from '@mantine/hooks';
import { SimpleGrid, useMantineTheme } from '@mantine/core';

import { mergeImage } from 'src/lib/helpers';
import { ENTITY, BREAKPOINTS } from 'src/constants';
import { EpisodeCard } from 'src/components/Episode';

import type { Podcast } from 'src/store/podcasts/types';

const breakpoints = BREAKPOINTS[ENTITY.EPISODE];

export function PodcastPageEpisodes({ id, name, image, episodes }: Podcast) {
  const theme = useMantineTheme();

  const isMaxXs = useMediaQuery(`(max-width: ${theme.breakpoints.xs}px)`);

  const list = useMemo(
    () => slice(episodes, 0, isMaxXs ? 5 : 6),
    [episodes, isMaxXs]
  );

  return (
    <SimpleGrid breakpoints={breakpoints}>
      {list.map((episode) => (
        <EpisodeCard
          {...episode}
          key={episode.guid}
          collection={{ id, name }}
          image={mergeImage(image, episode.image)}
        />
      ))}
    </SimpleGrid>
  );
}