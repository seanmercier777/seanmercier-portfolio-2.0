# Bind to a specific interface and port
bind = "0.0.0.0:8080"

# Number of worker processes
workers = 2

# Preload the application before forking worker processes
preload = True

# Log level for Gunicorn logs
loglevel = "debug"

# Other optional configurations:

# Enable access log
accesslog = "-"  # Writes to stdout, useful for Docker logging

# Enable error log
errorlog = "-"  # Writes to stdout for error logs

# Enable more verbose logging for debugging purposes
capture_output = True

# Timeout in seconds for workers to complete a request (default is 30 seconds)
timeout = 120

# Maximum number of requests a worker will handle before being restarted
max_requests = 1000

# Restart a worker after serving this number of requests, useful for memory leaks
max_requests_jitter = 50
