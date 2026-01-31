# AI Chatbot Agents

This document describes the specialized agents for the Phase 3 AI Todo Chatbot system, operating under the Phase 3 Constitution.

## Agent Architecture

The AI Todo Chatbot system implements a multi-agent architecture where each agent has a specific, well-defined responsibility. This design ensures modularity, maintainability, and adherence to the constitutional principles.

## Agent Definitions

### phase3-system-architect-agent
**Responsibilities:**
- Oversee the overall system architecture and ensure constitutional compliance
- Validate that no Phase 2 business logic is bypassed or modified
- Coordinate between other agents to maintain system integrity

**Explicitly does NOT:**
- Handle individual user requests
- Process natural language
- Interact directly with Phase 2 APIs

### ai-chatbot-orchestration-agent
**Responsibilities:**
- Coordinate the entire chatbot workflow from input to output
- Manage the sequence of agent interactions
- Handle error propagation between agents
- Maintain conversation state and context

**Explicitly does NOT:**
- Process natural language directly
- Make decisions about specific task operations
- Handle authentication directly

### nlp-intent-agent
**Responsibilities:**
- Process natural language input from users
- Classify user intent (CREATE_TASK, UPDATE_TASK, etc.)
- Extract entities from user commands
- Handle ambiguous commands by requesting clarification

**Explicitly does NOT:**
- Communicate with Phase 2 APIs
- Perform actual task operations
- Manage user authentication

### task-ai-control-agent
**Responsibilities:**
- Map recognized intents to specific Phase 2 API operations
- Validate that intents correspond to valid Phase 2 operations
- Prepare API call parameters based on extracted entities
- Handle multi-intent commands by sequencing operations

**Explicitly does NOT:**
- Process natural language
- Manage user authentication
- Format responses for users

### user-context-agent
**Responsibilities:**
- Validate user authentication tokens
- Retrieve and maintain user identity information
- Ensure user data isolation
- Provide user context to other agents

**Explicitly does NOT:**
- Process natural language
- Perform task operations
- Format responses for users

### ai-backend-integration-agent
**Responsibilities:**
- Execute Phase 2 API calls on behalf of other agents
- Handle API authentication and authorization
- Translate API errors to user-friendly messages
- Manage API rate limiting and retry logic

**Explicitly does NOT:**
- Process natural language
- Make business logic decisions
- Format responses for users

### ai-response-composer-agent
**Responsibilities:**
- Format API responses into user-friendly messages
- Compose responses for clarification requests
- Format error messages in a user-appropriate way
- Handle multi-language responses if needed

**Explicitly does NOT:**
- Process natural language input
- Execute API calls
- Manage user authentication

### ai-quality-guard-agent
**Responsibilities:**
- Validate all requests and responses for safety
- Block unsafe or unauthorized actions
- Detect and prevent hallucination attempts
- Ensure constitutional compliance before responses are sent

**Explicitly does NOT:**
- Process natural language
- Execute API calls
- Manage user authentication

### skills-create-agent
**Responsibilities:**
- Define and register new skills for the agent system
- Validate that skills meet architectural requirements
- Ensure skills are atomic and non-overlapping
- Maintain skill registry

**Explicitly does NOT:**
- Process user requests
- Execute task operations
- Handle authentication

## Agent Interaction Flow

```
User Input → ai-chatbot-orchestration-agent → nlp-intent-agent → user-context-agent → task-ai-control-agent → ai-backend-integration-agent → Phase 2 API → ai-backend-integration-agent → ai-response-composer-agent → ai-quality-guard-agent → ai-chatbot-orchestration-agent → User Output
```

## Constitutional Compliance

All agents must adhere to the Phase 3 Constitutional Principles:
1. Phase 2 Preservation: No agent may bypass Phase 2 APIs
2. Intent-Driven Control: All actions must map to valid Phase 2 operations
3. No Hallucinated Actions: Agents may not invent data or operations
4. User-Scoped Safety: Data isolation must be maintained
5. Explicit Behavior Only: Only specified behaviors are allowed