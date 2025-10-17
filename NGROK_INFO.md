# Portfolio Site - ngrok Configuration

## 🌐 Public URL
**https://b780567cf917.ngrok-free.app**

## 📋 Configuration Details

### Status
- ✅ ngrok installed and configured
- ✅ Authtoken configured
- ✅ Vite dev server running on port 5173
- ✅ ngrok tunnel active

### Services Running
1. **Vite Dev Server**
   - Local URL: http://localhost:5173/
   - Log file: `vite.log`
   - Process: Background job [1]

2. **ngrok Tunnel**
   - Public URL: https://b780567cf917.ngrok-free.app
   - Local port: 5173
   - Log file: `ngrok.log`
   - Web Interface: http://localhost:4040
   - Process: Background job [2]

### Commands to Manage Services

#### Check Status
```bash
jobs                          # List background jobs
ps aux | grep -E "(vite|ngrok)"  # Check processes
tail -f vite.log              # Monitor Vite logs
tail -f ngrok.log             # Monitor ngrok logs
```

#### Stop Services
```bash
# Get job numbers
jobs

# Kill jobs
kill %1  # Stop Vite
kill %2  # Stop ngrok

# Or kill by process name
pkill -f "vite"
pkill -f "ngrok"
```

#### Restart Services
```bash
# Start Vite dev server
npm run dev > vite.log 2>&1 &

# Start ngrok tunnel
ngrok http 5173 --log=stdout > ngrok.log 2>&1 &
```

### ngrok Web Interface
Access the ngrok web interface at: http://localhost:4040

This provides:
- Real-time request inspection
- Replay requests
- Tunnel status
- Traffic statistics

## ⚠️ Important Notes
- The ngrok URL will remain the same as long as the tunnel is active
- If the tunnel is stopped and restarted, a new URL will be generated
- Both services must remain running for public access to work
- The free ngrok plan may show an interstitial page before accessing the site
