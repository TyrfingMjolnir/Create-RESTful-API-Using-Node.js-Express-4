--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.1
-- Dumped by pg_dump version 9.5.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: book; Type: TABLE; Schema: public; Owner: projectName
--

CREATE TABLE book (
  "bookID" bigint NOT NULL,
  name text,
  author text,
  price numeric,
  "bookIDER" text
);


ALTER TABLE book OWNER TO projectName;

--
-- Name: books_book_bookID_seq; Type: SEQUENCE; Schema: public; Owner: projectName
--

CREATE SEQUENCE books_book_bookID_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE books_book_bookID_seq OWNER TO projectName;

--
-- Name: books_book_bookID_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: projectName
--

ALTER SEQUENCE books_book_bookID_seq OWNED BY book."bookID";


--
-- Name: bookID; Type: DEFAULT; Schema: public; Owner: projectName
--

ALTER TABLE ONLY book ALTER COLUMN "bookID" SET DEFAULT nextval( 'books_book_bookID_seq'::regclass );


--
-- Data for Name: book; Type: TABLE DATA; Schema: public; Owner: projectName
--

COPY book ( "bookID", name, author, price ) FROM stdin;
1	Node js	John Doe 1\N	\N
2	Angular js	John Dow 2\N	\N
3	HTML5	Dow Jones 3\N	\N
4	X never marks the spot	Indiana Jones 4\N	\N
\.


--
-- Name: books_book_bookID_seq; Type: SEQUENCE SET; Schema: public; Owner: projectName
--

SELECT pg_catalog.setval( 'books_book_bookID_seq', 1, false );


--
-- Name: book_pkey; Type: CONSTRAINT; Schema: public; Owner: projectName
--

ALTER TABLE ONLY book
  ADD CONSTRAINT book_pkey PRIMARY KEY ( "bookID" );


--
-- Name: public; Type: ACL; Schema: -; Owner: projectName
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM projectName;
GRANT ALL ON SCHEMA public TO projectName;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--
