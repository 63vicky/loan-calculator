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

// Custom ListItem components to avoid deprecated primaryTypographyProps
const InstructionListItem = ({ text }) => (
  <ListItem sx={{ py: 0.5 }}>
    <ListItemText
      primary={
        <Typography variant="body1" sx={{ fontWeight: 'medium' }}>
          {text}
        </Typography>
      }
    />
  </ListItem>
);

const RegularListItem = ({ text }) => (
  <ListItem sx={{ py: 0.5 }}>
    <ListItemText
      primary={
        <Typography variant="body1">
          {text}
        </Typography>
      }
    />
  </ListItem>
);

const AboutPage = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography
        variant="h4"
        component="h1"
        gutterBottom
        sx={{ fontSize: { xs: '1.75rem', sm: '2.125rem' } }}
      >
        About This App
      </Typography>

      <Typography variant="body1" sx={{ mb: 2 }}>
        This Loan Calculator App is a modern, single-page web application built using React JS and Material UI. It allows users to calculate loan EMIs (Equated Monthly Installments), view a detailed amortization schedule, and see real-time currency conversions of their EMI using live exchange rates.
      </Typography>
      <Divider sx={{ my: 4, borderWidth: 0.5 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, mb: 2 }}>
        <AssignmentIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h5" component="h2" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
          Instructions for Candidates
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ mb: 2 }}>
        Please follow these instructions to complete and submit your project:
      </Typography>

      <List sx={{ pl: 2 }}>
        <InstructionListItem text="Push the entire project to a public GitHub repository" />
        <InstructionListItem text="Make sure to commit regularly with clear messages after completing each feature." />
        <InstructionListItem text="Use the provided EMI formula to perform calculations." />
        <InstructionListItem text="Use Context API for global state management (e.g. theme, currency)." />
        <InstructionListItem text="Create custom React hooks for reusable logic (e.g. EMI calculation, fetching exchange rates)." />
        <InstructionListItem text="Integrate the ExchangeRate API for live currency conversion." />
        <InstructionListItem text="Ensure the app is fully responsive on all screen sizes." />
        <InstructionListItem text="Implement both light and dark modes using Material UI's theming system." />
        <InstructionListItem text="Add a 404 Not Found page for unmatched routes." />
        <InstructionListItem text="Handle runtime errors gracefully by showing an Error Page." />
        <InstructionListItem text="Once deployed, add the live deployment link in the About section of your GitHub repo." />
        <InstructionListItem text="Deploy the project on any platform (e.g. Vercel, Netlify, GitHub Pages)." />
      </List>

      <Typography
        variant="body1"
        sx={{
          mt: 2,
          fontWeight: 'medium',
          p: 1,
          borderRadius: 1,
          fontSize: { xs: '0.875rem', sm: '1rem' }
        }}
      >
        ✅ Your final GitHub repository should include a live demo link, and your code should be readable, modular, and well-structured.
      </Typography>
      <Divider sx={{ my: 4, borderWidth: 0.5 }} />

      <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, mb: 2 }}>
        <BuildIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h5" component="h2" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
          Features
        </Typography>
      </Box>

      <List sx={{ pl: 2 }}>
        <RegularListItem text="Loan EMI calculation using standard financial formulas" />
        <RegularListItem text="Dynamic amortization schedule table with monthly breakdown" />
        <RegularListItem text="Real-time currency conversion of EMI using a live exchange rate API" />
        <RegularListItem text="Paginated exchange rate table for 160+ currencies" />
        <RegularListItem text="Dark/Light mode toggle for a customizable experience" />
        <RegularListItem text="Collapsible header navigation on mobile screens" />
        <RegularListItem text="Fully responsive UI built with Material UI" />
      </List>
      <Divider sx={{ my: 4, borderWidth: 0.5 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, mb: 2 }}>
        <CodeIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h5" component="h2" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
          Technologies Used
        </Typography>
      </Box>

      <List sx={{ pl: 2 }}>
        <RegularListItem text="React (Hooks, Routing, Context API)" />
        <RegularListItem text="Material UI for styling and responsive components" />
        <RegularListItem text="Axios for API calls" />
        <RegularListItem text="Exchange Rate API for real-time currency conversion" />
      </List>
      <Divider sx={{ my: 4, borderWidth: 0.5 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, mb: 2 }}>
        <CalculateIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h5" component="h2" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
          EMI Formula Used
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ mb: 2 }}>
        The EMI (Equated Monthly Installment) is calculated using the standard formula:
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: 'monospace',
          my: 2,
          fontWeight: 'bold',
          pl: 2,
          overflowX: 'auto',
          fontSize: { xs: '0.85rem', sm: '1rem' }
        }}
      >
        EMI = [P × R × (1+R)^N] / [(1+R)^N – 1]
      </Typography>

      <Typography variant="body1" sx={{ pl: 2, mb: 2 }}>
        Where:
      </Typography>

      <List sx={{ pl: 4 }}>
        <RegularListItem text="P = Principal loan amount" />
        <RegularListItem text="R = Monthly interest rate (annual rate / 12 / 100)" />
        <RegularListItem text="N = Loan duration in months" />
      </List>
      <Divider sx={{ my: 4, borderWidth: 0.5 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, mb: 2 }}>
        <PublicIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h5" component="h2" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
          Currency Conversion API
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ mb: 2 }}>
        This app integrates with the free tier of the ExchangeRate-API to fetch live exchange rates.
      </Typography>

      <Typography
        variant="body1"
        sx={{
          fontFamily: 'monospace',
          my: 2,
          pl: 2,
          overflowX: 'auto',
          fontSize: { xs: '0.75rem', sm: '0.875rem' },
          wordBreak: 'break-all'
        }}
      >
        API Endpoint Example: https://v6.exchangerate-api.com/v6/YOUR_API_KEY/latest/USD
      </Typography>
      <Divider sx={{ my: 4, borderWidth: 0.5 }} />
      <Box sx={{ display: 'flex', alignItems: 'center', mt: 4, mb: 2 }}>
        <EmojiObjectsIcon sx={{ mr: 1, color: 'primary.main' }} />
        <Typography variant="h5" component="h2" sx={{ fontSize: { xs: '1.25rem', sm: '1.5rem' } }}>
          Purpose of This App
        </Typography>
      </Box>

      <Typography variant="body1" sx={{ mb: 2 }}>
        This project is designed to assess a candidate's React development skills, including:
      </Typography>

      <List sx={{ pl: 2 }}>
        <RegularListItem text="React fundamentals (state, props, hooks)" />
        <RegularListItem text="Component structure and code reusability" />
        <RegularListItem text="Third-party API integration and live data rendering" />
        <RegularListItem text="Working with tables, lists, and pagination" />
        <RegularListItem text="Theme customization (dark/light mode toggle)" />
        <RegularListItem text="Error handling and graceful UI fallbacks" />
        <RegularListItem text="Responsive design and collapsible mobile header navigation (In Mobile view)" />
      </List>

      <Typography
        variant="body1"
        sx={{
          mt: 2,
          fontWeight: 'medium',
          p: 1,
          borderRadius: 1,
          fontSize: { xs: '0.875rem', sm: '1rem' }
        }}
      >
        ✨ For any currency conversion feature to work, make sure the API key is valid and the network allows external API calls.
      </Typography>
    </Box>
  );
};

export default AboutPage;
