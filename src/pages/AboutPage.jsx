import React from 'react';
import {
  Box, Typography, Paper, List, ListItem,
  ListItemText, Link, Divider
} from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BuildIcon from '@mui/icons-material/Build';
import CodeIcon from '@mui/icons-material/Code';
import CalculateIcon from '@mui/icons-material/Calculate';
import PublicIcon from '@mui/icons-material/Public';
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';

const AboutPage = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        About This App
      </Typography>

      <Typography paragraph>
        This Loan Calculator App is a modern, single-page web application built using React JS and Material UI. It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule, and see real-time currency conversions of their EMI using live exchange rates.
      </Typography>
      <Divider sx={{ my: 4, borderWidth: 0.5 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, mb: 2 }}>
        <AssignmentIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h5" component="h2">
          Instructions for Candidates
        </Typography>
      </Box>

      <Typography paragraph>
        Please follow these instructions to complete and submit your project:
      </Typography>

      <List sx={{ pl: 2 }}>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText
            primary="Push the entire project to a public GitHub repository"
            primaryTypographyProps={{ fontWeight: 'medium' }}
          />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText
            primary="Make sure to commit regularly with clear messages after completing each feature."
            primaryTypographyProps={{ fontWeight: 'medium' }}
          />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText
            primary="Use the provided EMI formula to perform calculations."
            primaryTypographyProps={{ fontWeight: 'medium' }}
          />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText
            primary="Use Context API for global state management (e.g. theme, currency)."
            primaryTypographyProps={{ fontWeight: 'medium' }}
          />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText
            primary="Create custom React hooks for reusable logic (e.g. EMI calculation, fetching exchange rates)."
            primaryTypographyProps={{ fontWeight: 'medium' }}
          />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText
            primary="Integrate the ExchangeRate API for live currency conversion."
            primaryTypographyProps={{ fontWeight: 'medium' }}
          />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText
            primary="Ensure the app is fully responsive on all screen sizes."
            primaryTypographyProps={{ fontWeight: 'medium' }}
          />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText
            primary="Implement both light and dark modes using Material UI's theming system."
            primaryTypographyProps={{ fontWeight: 'medium' }}
          />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText
            primary="Add a 404 Not Found page for unmatched routes."
            primaryTypographyProps={{ fontWeight: 'medium' }}
          />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText
            primary="Handle runtime errors gracefully by showing an Error Page."
            primaryTypographyProps={{ fontWeight: 'medium' }}
          />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText
            primary="Once deployed, add the live deployment link in the About section of your GitHub repo."
            primaryTypographyProps={{ fontWeight: 'medium' }}
          />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText
            primary="Deploy the project on any platform (e.g. Vercel, Netlify, GitHub Pages)."
            primaryTypographyProps={{ fontWeight: 'medium' }}
          />
        </ListItem>
      </List>

      <Typography paragraph sx={{ mt: 2, fontWeight: 'medium', bgcolor: '', p: 1, borderRadius: 1 }}>
        ✅ Your final GitHub repository should include a live demo link, and your code should be readable, modular, and well-structured.
      </Typography>
      <Divider sx={{ my: 4, borderWidth: 0.5 }} />

      <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, mb: 2 }}>
        <BuildIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h5" component="h2">
          Features
        </Typography>
      </Box>

      <List sx={{ pl: 2 }}>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Loan EMI calculation using standard financial formulas" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Dynamic amortization schedule table with monthly breakdown" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Real-time currency conversion of EMI using a live exchange rate API" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Paginated exchange rate table for 160+ currencies" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Dark/Light mode toggle for a customizable experience" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Collapsible header navigation on mobile screens" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Fully responsive UI built with Material UI" />
        </ListItem>
      </List>
      <Divider sx={{ my: 4, borderWidth: 0.5 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, mb: 2 }}>
        <CodeIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h5" component="h2">
          Technologies Used
        </Typography>
      </Box>

      <List sx={{ pl: 2 }}>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="React (Hooks, Routing, Context API)" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Material UI for styling and responsive components" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Axios for API calls" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Exchange Rate API for real-time currency conversion" />
        </ListItem>
      </List>
      <Divider sx={{ my: 4, borderWidth: 0.5 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, mb: 2 }}>
        <CalculateIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h5" component="h2">
          EMI Formula Used
        </Typography>
      </Box>

      <Typography paragraph>
        The EMI (Equated Monthly Installment) is calculated using the standard formula:
      </Typography>

      <Typography paragraph sx={{ fontFamily: 'monospace', my: 2, fontWeight: 'bold', pl: 2 }}>
        EMI = [P × R × (1+R)^N] / [(1+R)^N – 1]
      </Typography>

      <Typography paragraph sx={{ pl: 2 }}>
        Where:
      </Typography>

      <List sx={{ pl: 4 }}>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="P = Principal loan amount" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="R = Monthly interest rate (annual rate / 12 / 100)" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="N = Loan duration in months" />
        </ListItem>
      </List>
      <Divider sx={{ my: 4, borderWidth: 0.5 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, mb: 2 }}>
        <PublicIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h5" component="h2">
          Currency Conversion API
        </Typography>
      </Box>

      <Typography paragraph>
        This app integrates with the free tier of the ExchangeRate-API to fetch live exchange rates.
      </Typography>

      <Typography paragraph sx={{ fontFamily: 'monospace', my: 2, pl: 2 }}>
        API Endpoint Example: https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD
      </Typography>
      <Divider sx={{ my: 4, borderWidth: 0.5 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, mb: 2 }}>
        <EmojiObjectsIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h5" component="h2">
          Purpose of This App
        </Typography>
      </Box>

      <Typography paragraph>
        This project is designed to assess a candidate's React development skills, including:
      </Typography>

      <List sx={{ pl: 2 }}>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="React fundamentals (state, props, hooks)" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Component structure and code reusability" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Third-party API integration and live data rendering" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Working with tables, lists, and pagination" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Theme customization (dark/light mode toggle)" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Error handling and graceful UI fallbacks" />
        </ListItem>
        <ListItem sx={{ py: 0.5 }}>
          <ListItemText primary="Responsive design and collapsible mobile header navigation (In Mobile view)" />
        </ListItem>
      </List>

      <Typography paragraph sx={{ mt: 2, fontWeight: 'medium', bgcolor: '', p: 1, borderRadius: 1 }}>
        ✨ For any currency conversion feature to work, make sure the API key is valid and the network allows external API calls.
      </Typography>
    </Box>
  );
};

export default AboutPage;
