import React, { useEffect, useState, useRef } from 'react'
import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
} from '@material-ui/core'
import { useStyles } from './styled'

import { CopyToClipboard } from 'react-copy-to-clipboard'

const generateIframeCode = props => {
  const { title, link } = props
  const generateId = value => {
    return `${value.replace(/\s/g, '_').toLowerCase()}_id`
  }
  const code = `
  <iframe id="${generateId(
    title
  )}" title="${title}" width="920" height="1200" src="${
    window.location.origin
  }${link}">
  </iframe>

  <script>
    function checkSize() {
      if (window.innerWidth < 920) {
        document.getElementById("${generateId(
          title
        )}").width = window.innerWidth - 40
      }
    }

    checkSize()
      window.addEventListener('resize', checkSize)
      window.onunload = function() {
        window.removeEventListener('resize', checkSize)
    }
  </script>
  `

  return code
}

const DataMenu = props => {
  const { data } = props
  const [open, setOpen] = useState(false)
  const btnRef = useRef()

  return (
    <>
      <Button
        buttonRef={btnRef}
        aria-owns={open ? 'menu-list-grow' : null}
        aria-haspopup="true"
        onClick={() => {
          setOpen(!open)
        }}
        size="small"
        color="primary"
      >
        Data Menu
      </Button>
      <Popper open={open} anchorEl={btnRef.current} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            id="menu-list-grow"
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener
                onClickAway={() => {
                  setOpen(false)
                }}
              >
                <MenuList>
                  {data.map((item, index) => (
                    <MenuItem
                      key={item}
                      onClick={() => {
                        setOpen(false)
                        window.open(item, '_blank')
                      }}
                    >
                      {`Data ${index}`}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}

const LinkCard = props => {
  const { data } = props
  const { title, link, description, backgroundLink, linkDataSheet } = data
  const [copied, setCopied] = useState(false)
  const classes = useStyles()

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(!copied)
      }, 3000)
    }
  }, [copied])

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.cardMedia}
            image={backgroundLink}
            title={title}
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button href={link} target="_blank" size="small" color="primary">
            Open
          </Button>
          <CopyToClipboard
            text={generateIframeCode(data)}
            onCopy={() => {
              setCopied(true)
            }}
          >
            <Button size="small" color="primary" disabled={copied}>
              {copied ? 'Copied!' : 'Iframe code'}
            </Button>
          </CopyToClipboard>
          {Array.isArray(linkDataSheet) ? (
            <DataMenu data={linkDataSheet} />
          ) : (
            <Button
              href={linkDataSheet}
              target="_blank"
              size="small"
              color="primary"
            >
              Data
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  )
}

export { LinkCard as default }
