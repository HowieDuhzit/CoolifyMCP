# Contributing to Coolify MCP Server

Thank you for your interest in contributing to the Coolify MCP Server! This document provides guidelines and information for contributors.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Setup](#development-setup)
- [Making Changes](#making-changes)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Code Style](#code-style)
- [Documentation](#documentation)

## Code of Conduct

This project follows the [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold this code.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
3. Create a new branch for your feature or bugfix
4. Make your changes
5. Test your changes
6. Submit a pull request

## Development Setup

### Prerequisites

- Node.js 20+ 
- npm 9+
- Git
- Docker (optional, for testing)

### Setup Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/CoolifyMCP.git
   cd CoolifyMCP
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment:**
   ```bash
   cp config.example.env .env
   # Edit .env with your Coolify credentials
   ```

4. **Build the project:**
   ```bash
   npm run build
   ```

5. **Run in development mode:**
   ```bash
   npm run dev
   ```

## Making Changes

### Branch Naming

Use descriptive branch names:
- `feature/add-new-endpoint` for new features
- `fix/error-handling` for bug fixes
- `docs/update-readme` for documentation
- `refactor/cleanup-code` for refactoring

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
type(scope): description

[optional body]

[optional footer(s)]
```

Examples:
- `feat(api): add new database endpoint`
- `fix(config): resolve environment variable parsing`
- `docs(readme): update installation instructions`
- `refactor(handlers): improve error handling`

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### Test Structure

- Unit tests: `src/**/*.test.ts`
- Integration tests: `tests/**/*.test.ts`
- Test utilities: `tests/utils/`

### Writing Tests

- Write tests for new features
- Ensure existing tests still pass
- Aim for good test coverage
- Use descriptive test names

## Submitting Changes

### Pull Request Process

1. **Create a Pull Request:**
   - Use a clear, descriptive title
   - Reference any related issues
   - Provide a detailed description

2. **Pull Request Template:**
   ```markdown
   ## Description
   Brief description of changes

   ## Type of Change
   - [ ] Bug fix
   - [ ] New feature
   - [ ] Breaking change
   - [ ] Documentation update

   ## Testing
   - [ ] Tests pass locally
   - [ ] New tests added for new functionality
   - [ ] Manual testing completed

   ## Checklist
   - [ ] Code follows style guidelines
   - [ ] Self-review completed
   - [ ] Documentation updated
   - [ ] No breaking changes (or documented)
   ```

3. **Review Process:**
   - Address review feedback
   - Keep PRs focused and small
   - Respond to comments promptly

## Code Style

### TypeScript Guidelines

- Use strict TypeScript configuration
- Prefer interfaces over types for object shapes
- Use meaningful variable and function names
- Add JSDoc comments for public APIs
- Handle errors explicitly

### Code Formatting

- Use ESLint configuration provided
- Run `npm run lint:fix` before committing
- Follow existing code patterns
- Keep functions small and focused

### File Organization

```
src/
├── types.ts          # Type definitions
├── config.ts         # Configuration management
├── api-client.ts     # HTTP client wrapper
├── handlers.ts       # API endpoint handlers
├── tools.ts          # MCP tool definitions
├── health-server.ts  # Health check server
└── index.ts          # Main server file
```

## Documentation

### Updating Documentation

- Update README.md for user-facing changes
- Update CHANGELOG.md for all changes
- Add JSDoc comments for new functions
- Update configuration examples if needed

### Documentation Standards

- Use clear, concise language
- Provide code examples
- Include error scenarios
- Keep documentation up-to-date

## API Endpoints

When adding new Coolify API endpoints:

1. **Add to types.ts:**
   - Define argument types
   - Add response types if needed

2. **Add to tools.ts:**
   - Define MCP tool schema
   - Include proper descriptions

3. **Add to handlers.ts:**
   - Implement handler method
   - Add proper error handling

4. **Add to index.ts:**
   - Add case to switch statement
   - Call appropriate handler

5. **Update documentation:**
   - Add to README.md
   - Update API reference

## Release Process

Releases are managed by maintainers:

1. Update version in package.json
2. Update CHANGELOG.md
3. Create release tag
4. Publish to npm (if applicable)

## Getting Help

- Check existing issues and discussions
- Join our community Discord
- Create an issue for bugs or feature requests
- Ask questions in discussions

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to Coolify MCP Server! 🚀
