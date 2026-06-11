import { Box, Button, Stack, Typography } from '@mui/material';

export const OrderTotal = ({ total }: { total: number }) => {
  return (
    <Stack spacing={'10px'} sx={{ marginTop: 4 }}>
      <Typography sx={{ fontWeight: 600, fontSize: 14, color: 'primary.dark' }}>Total</Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          border: '1px solid',
          borderColor: 'common.black',
          borderRadius: '4px',
          padding: 2,
          backgroundColor: 'common.white',
          gap: '16px',
        }}
      >
        <Typography sx={{ fontSize: { xs: 28, sm: 32 }, fontWeight: 400, color: 'primary.dark' }}>
          {`$${total.toFixed(2)}`}
        </Typography>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ width: { xs: '100%', sm: 'auto' } }}
        >
          <Button
            variant="outlined"
            sx={{
              fontSize: 16,
              lineHeight: '19px',
              borderColor: 'common.black',
              color: 'primary.dark',
              textTransform: 'none',
              fontWeight: 700,
              padding: '10px 16px',
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                backgroundColor: 'grey.100',
              },
            }}
          >
            Discount
          </Button>

          <Button
            variant="contained"
            sx={{
              fontSize: 16,
              lineHeight: '19px',
              backgroundColor: 'primary.dark',
              color: 'common.white',
              textTransform: 'none',
              fontWeight: 700,
              padding: '10px 16px',
              boxShadow: 'none',
              transition: 'all 0.2s ease',
              width: { xs: '100%', sm: 'auto' },
              '&:hover': {
                opacity: 0.85,
                boxShadow: 'none',
              },
            }}
          >
            Check Order
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};
