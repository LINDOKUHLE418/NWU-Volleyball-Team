CREATE TABLE IF NOT EXISTS join_requests (
  id               SERIAL PRIMARY KEY,
  full_name        VARCHAR(100) NOT NULL,
  student_number   VARCHAR(20)  NOT NULL UNIQUE,
  email            VARCHAR(255) NOT NULL,
  phone_number     VARCHAR(20)  NOT NULL,
  position         VARCHAR(30)  NOT NULL,
  experience_level VARCHAR(20)  NOT NULL,
  status           VARCHAR(20)  NOT NULL DEFAULT 'pending'
                   CHECK (status IN ('pending', 'contacted', 'approved', 'rejected')),
  created_at       TIMESTAMPTZ  NOT NULL DEFAULT NOW(),
  updated_at       TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS admins (
  id            SERIAL PRIMARY KEY,
  email         VARCHAR(255) NOT NULL UNIQUE,
  password_hash TEXT         NOT NULL,
  created_at    TIMESTAMPTZ  NOT NULL DEFAULT NOW()
);