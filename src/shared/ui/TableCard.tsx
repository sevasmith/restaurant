import { Box, Stack, SvgIcon, Typography } from '@mui/material';
import { Link as RouterLink } from '@tanstack/react-router';
import ArrowIcon from '../../assets/icons/arrow.svg?react';
import type { TableCardType } from '../types/types';

export const TableCard = ({ card }: { card: TableCardType }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        aspectRatio: '1/1',
        padding: { xs: '6px', sm: '8px', md: '10px', lg: card.padding },
      }}
    >
      <Box
        component={RouterLink}
        to={card.link}
        search={true}
        sx={{
          position: 'relative',
          display: 'flex',
          flexGrow: 1,
          textDecoration: 'none',
          color: 'common.black',
        }}
      >
        <Stack
          direction={'column'}
          sx={{
            flexGrow: 1,
            paddingBottom: 2.5,
            backgroundColor: `table${card.status}.light`,
            border: '1px solid',
            borderColor: 'grey.200',
            borderRadius: '8px',
            justifyContent: 'space-between',
            backgroundClip: 'padding-box',
            ooverflow: 'hidden',
            transition: 'all 0.1s ease',
            '&:hover': { boxShadow: (theme) => `inset 0 0 0 1px ${theme.palette.grey[200]}` },
          }}
        >
          <Stack
            direction={'row'}
            sx={{ padding: 1, alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Typography sx={{ fontSize: { xs: 18, md: 14 }, fontWeight: 600 }}>
              {card.id}
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                padding: 0.5,
                top: 0,
                right: 0,
                backgroundColor: `table${card.status}.main`,
                borderTopRightRadius: '8px',
                borderBottomLeftRadius: '8px',
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 16, md: 12 },
                  fontWeight: 600,
                  color: `table${card.status}.contrastText`,
                }}
              >
                {card.status}
              </Typography>
            </Box>
          </Stack>
          <Stack
            spacing={{ xs: 0, md: 1, lg: 0 }}
            direction={{ xs: 'column', md: 'row', lg: 'column' }}
            sx={{ alignItems: 'center', alignSelf: 'center' }}
          >
            <Typography sx={{ fontSize: { xs: 18, md: 14 }, fontWeight: 600 }}>
              {card.time}
            </Typography>
            <SvgIcon component={ArrowIcon} inheritViewBox sx={{ width: '14px' }} />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
