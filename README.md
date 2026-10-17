# FCVision

An exclusive football minigame bot for Discord, built with [Seyfert](https://seyfert.dev) and Discord Components V2.

## Features

### Games

| Game | Description |
|------|-------------|
| **Post** | 3×3 penalty shootout. Shooter and keeper pick a box; same box = save, different = goal. Best of 5 with sudden death. Entry fee: 🪙 10. |
| **What Stadium Is This** | Multiplayer stadium quiz. 5 rounds, 4 options, first correct gets the most points. |
| **Freekick Shootout** | 1v1 direction battle. Shooter and keeper pick Left/Center/Right. Best of 5. Entry fee: 🪙 10. |
| **Beat the Defender** | Predict the defender's approach. Pick the opposite direction to dribble past; center is a 50/50 nutmeg. 5 rounds. |
| **Crossbar Challenge** | 1v1 accuracy test. Take turns shooting at the crossbar; 5 attempts each. Entry fee: 🪙 10. |

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
| `/post challenge <user>` | Challenge a player to Post. Entry fee: 🪙 10 each. |
| `/post play` | Open a Post lobby. Entry fee: 🪙 10 each. |
| `/freekick challenge <user>` | Challenge a player to a freekick shootout. Entry fee: 🪙 10 each. |
| `/freekick play` | Open a freekick lobby. Entry fee: 🪙 10 each. |
| `/crossbar challenge <user>` | Challenge a player to a crossbar challenge. Entry fee: 🪙 10 each. |
| `/crossbar play` | Open a crossbar lobby. Entry fee: 🪙 10 each. |
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
# Production (manual)
bun run start

# Development (auto-restart on file changes)
bun run dev
```

### Systemd Service (Recommended for Self-Hosting)

To keep FCVision running reliably as a background service with auto-recovery on connection issues:

1. Copy the systemd unit file:
   ```bash
   sudo cp deploy/fcvision.service /etc/systemd/system/
   ```
2. Reload systemd daemon and enable the service:
   ```bash
   sudo systemctl daemon-reload
   sudo systemctl enable --now fcvision
   ```
3. Check logs and status:
   ```bash
   sudo systemctl status fcvision
   sudo journalctl -u fcvision -f
   ```

## Project Structure

```
src/
  index.ts                  Entry point: starts the Client, uploads commands, flushes DB on shutdown
  commands/                 Slash commands (Seyfert location)
    post/                   /post parent + challenge/play subcommands
    stadium.ts              /stadium quiz
    dribble.ts              /dribble challenge
    freekick.ts             /freekick parent + subcommands
    crossbar.ts             /crossbar parent + subcommands
    coins.ts                /coins balance
    shop.ts                 /shop parent + subcommands
  subcommands/              Subcommand classes used by parent commands
  components/               Button handlers (Seyfert location)
  events/                   Ready, guild-exclusivity guard, shard events
  game/
    engines/                Game rules per mode
      post.ts               Post shootout
      stadium.ts            What Stadium Is This quiz
      dribble.ts            Beat the Defender
      freekick.ts           Freekick shootout
      crossbar.ts           Crossbar challenge
    ui/                     Components V2 rendering
      shared.ts             Challenge/lobby messages and Post match rendering
      stadium.ts, dribble.ts, freekick.ts, crossbar.ts, shop.ts
    shared/                 Code used by several modes
      challenge.ts          Challenge and lobby flow factories
      constants.ts          Timings, layouts, colors, rewards
      types.ts              Session/match type definitions
      store.ts              In-memory session map
      utils.ts              Interaction helpers and shared utilities
    stadiums/
      data.ts               Stadium dataset
      selector.ts           Weighted historical stadium diversifier
    persistence/            LMDB-backed storage (data/fcvision.lmdb)
      database.ts           LMDB environment + one-time legacy JSON import
      users.ts              User stats and coins (in-memory cache)
      shop.ts               Shop items
```

## Stadium Images

The default stadium images are generated as placeholders via `placehold.co` to avoid broken Wikimedia hotlinks. Replace the placeholder logic in `src/game/ui-stadium.ts` with your own hosted image URLs for a polished, branded experience.

## License

[Apache License 2.0](LICENSE)
