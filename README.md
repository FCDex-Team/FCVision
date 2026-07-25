# FCVision

An exclusive football minigame bot for Discord, built with [Seyfert](https://seyfert.dev) and Discord Components V2.

## Features

### Games

| Game | Description |
|------|-------------|
| **Post** | 3×3 penalty shootout. Shooter and keeper pick a box; same box = save, different = goal. Best of 5 with sudden death. |
| **What Stadium Is This** | Multiplayer stadium quiz. 5 rounds, 4 options, first correct gets the most points. |
| **Freekick Shootout** | 1v1 direction battle. Shooter and keeper pick Left/Center/Right. Best of 3. |
| **Beat the Defender** | Predict the defender's approach. Pick the opposite direction to dribble past; center is a 50/50 nutmeg. |
| **Crossbar Challenge** | 1v1 accuracy test. Take turns shooting at the crossbar; most hits wins. |

### Economy

| Command | Description |
|---------|-------------|
| `/coins` | Check your coin balance and win stats. |
| `/shop browse` | Browse paginated shop items and buy rewards/roles. |
| `/shop create` | *(Administrator only)* Create a shop item with an optional role reward. |

## Commands

### Games

| Command | Description |
|---------|-------------|
| `/post challenge <user>` | Challenge a player to Post. |
| `/post play` | Open a Post lobby. |
| `/freekick challenge <user>` | Challenge a player to a freekick shootout. |
| `/freekick play` | Open a freekick lobby. |
| `/crossbar challenge <user>` | Challenge a player to a crossbar challenge. |
| `/crossbar play` | Open a crossbar lobby. |
| `/stadium` | Start a What-Stadium-Is-This quiz in the channel. |
| `/dribble` | Start a Beat the Defender challenge in the channel. |
| `/shop browse` | Browse the shop and buy items. |
| `/shop create` | *(Administrator only)* Add a new shop item. |

## Setup

### Prerequisites

- [Bun](https://bun.com) runtime
- A Discord bot token from the [Discord Developer Portal](https://discord.com/developers/applications)

### Installation

```bash
# Clone the repository
git clone https://github.com/arielaram/fcvision.git
cd fcvision

# Install dependencies
bun install
```

### Configuration

1. Copy the example environment file:

   ```bash
   cp .env.example .env
   ```

2. Fill in the required values in `.env`:

   - `BOT_TOKEN` — your bot's token
   - `GUILD_ID` — the ID of the one server this bot is exclusive to

### Running

```bash
# Production
bun run start

# Development (auto-restart on file changes)
bun run dev
```

## Project Structure

```
src/
  index.ts              Entry point — starts the Client and uploads commands
  commands/             Slash commands
    post/               /post parent + challenge/play subcommands
    stadium.ts          /stadium quiz
    dribble.ts          /dribble challenge
    freekick.ts         /freekick parent + subcommands
    crossbar.ts         /crossbar parent + subcommands
    coins.ts            /coins balance
  subcommands/          Subcommand classes used by parent commands
  components/           Button handlers for all games
  events/               Ready + guild-exclusivity guard
  game/
    db.ts               Database layer (SQLite)
    constants.ts        Timings, layouts, colors, rewards
    types.ts            Session/match type definitions
    store.ts            In-memory session map
    stadiums.ts         300-stadium dataset (246 real + 54 fake)
    engine.ts           Post game rules
    stadium-engine.ts   Stadium quiz rules
    stadium-selector.ts Weighted historical stadium diversifier
    dribble-engine.ts   Beat the Defender rules
    freekick-engine.ts  Freekick shootout rules
    crossbar-engine.ts  Crossbar challenge rules
    ui*.ts              Components V2 rendering per game
```

## Stadium Images

The default `src/game/stadiums.ts` uses Wikimedia Commons URLs for well-known stadiums. Replace the `imageUrl` values with your own hosted images for a polished, branded experience.

## License

[Apache License 2.0](LICENSE)
