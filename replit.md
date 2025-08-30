# Overview

MediLinkX is a multi-page healthcare Web3 and AI-powered frontend application designed as a "Decentralized Health Identity & Smart Benefits Platform." The application provides a comprehensive healthcare management system that leverages blockchain technology for secure health identity creation, AI-driven recommendations for health schemes, and automated voucher management with cryptocurrency payment capabilities. The platform follows a structured workflow from health ID creation through AI analysis, scheme applications, wallet management, and final receipt generation with PDF export functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a modern React-based architecture with TypeScript, built using Vite as the build tool. The frontend implements a multi-page application (not SPA) using Wouter for client-side routing. The UI is built with shadcn/ui components based on Radix UI primitives, styled with Tailwind CSS following a consistent color palette (Blue #007BFF, Green #28A745, White #FFFFFF, Orange #FF8800, Red #DC3545).

Key architectural decisions:
- **Component Structure**: Modular component design with separate UI components, layout components, and page components
- **State Management**: Uses React hooks for local state and TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form processing
- **Styling**: Tailwind CSS with CSS custom properties for consistent theming

## Backend Architecture
The backend is built with Express.js and TypeScript, following a minimal REST API pattern. The server implements:
- **Route Registration**: Centralized route management with `/api` prefix for all endpoints
- **Middleware Stack**: Express JSON parsing, URL encoding, request logging, and error handling
- **Development Setup**: Vite integration for hot module replacement in development
- **Storage Interface**: Abstract storage layer with in-memory implementation for development

## Data Storage Solutions
The application uses a hybrid storage approach:
- **Database**: PostgreSQL with Drizzle ORM for schema management and type-safe database operations
- **Local Storage**: Browser localStorage for demo data persistence and temporary state
- **Schema Design**: Well-defined TypeScript schemas using Zod for validation, covering HealthID, HealthScheme, Voucher, and Transaction entities

## Authentication and Authorization
Currently implements a minimal authentication system suitable for demo purposes:
- **Session Management**: Basic session handling without complex user authentication
- **Data Privacy**: Local storage for sensitive health data with proper schema validation
- **Security Considerations**: Input validation through Zod schemas and type safety through TypeScript

## External Dependencies
- **UI Framework**: React 18 with TypeScript for type safety
- **Database**: Drizzle ORM with PostgreSQL (Neon Database serverless)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Form Management**: React Hook Form with Hookform Resolvers for Zod integration
- **State Management**: TanStack React Query for server state
- **PDF Generation**: jsPDF integration for receipt generation
- **Development Tools**: Vite for build tooling with runtime error overlays

The architecture prioritizes developer experience, type safety, and maintainability while providing a solid foundation for a healthcare Web3 application with clear separation of concerns between frontend, backend, and data layers.