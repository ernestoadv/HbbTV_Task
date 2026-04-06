import type { Event } from "../model/eventsModel";

/** Sample videos */
const MOCK_VIDEOS = [
  "https://fra1.mirror.jellyfin.org/test-videos/SDR/AVC/Test%20Jellyfin%201080p%20AVC%203M.mp4",
  "https://test-videos.co.uk/vids/jellyfish/mp4/h264/1080/Jellyfish_1080_10s_10MB.mp4",
  "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_5MB.mp4",
] as const;

/** Sample thumbnails generator */
const getThumbnail = (seed: string) =>
  `https://picsum.photos/seed/${encodeURIComponent(seed)}/1280/720`;

/** Sample video mapper */
const getVideo = (index: number) => MOCK_VIDEOS[index % 3];

export const eventsMock: Event[] = [
  {
    title: "The Harbour at Midnight",
    season: "1",
    episode: "1",
    metadata: ["HD", "UT", "AD"],
    thumbnail: getThumbnail("hbbtv-north-harbour-s1e1"),
    videoUrl: getVideo(0),
  },
  {
    title: "Lines in the Sand",
    season: "1",
    episode: "2",
    metadata: ["HD", "5.1", "DGS"],
    thumbnail: getThumbnail("hbbtv-north-harbour-s1e2"),
    videoUrl: getVideo(1),
  },
  {
    title: "Witness for the Defence",
    season: "1",
    episode: "3",
    metadata: ["HD", "UT", "NEW"],
    thumbnail: getThumbnail("hbbtv-crownhall-s1e3"),
    videoUrl: getVideo(2),
  },
  {
    title: "After the Thaw",
    season: "2",
    episode: "1",
    metadata: ["UHD", "HDR", "AD"],
    thumbnail: getThumbnail("hbbtv-fjord-s2e1"),
    videoUrl: getVideo(3),
  },
  {
    title: "The Silent Relay",
    season: "2",
    episode: "4",
    metadata: ["HD", "UT"],
    thumbnail: getThumbnail("hbbtv-fjord-s2e4"),
    videoUrl: getVideo(4),
  },
  {
    title: "Paper Trails",
    season: "3",
    episode: "2",
    metadata: ["HD", "5.1", "UT", "DGS"],
    thumbnail: getThumbnail("hbbtv-archive-s3e2"),
    videoUrl: getVideo(5),
  },
  {
    title: "Last Light, Longyearbyen",
    season: "1",
    episode: "6",
    metadata: ["HD", "AD", "ST"],
    thumbnail: getThumbnail("hbbtv-arctic-doc-s1e6"),
    videoUrl: getVideo(6),
  },
  {
    title: "Migration in Motion",
    season: "2",
    episode: "3",
    metadata: ["UHD", "5.1"],
    thumbnail: getThumbnail("hbbtv-wildlife-s2e3"),
    videoUrl: getVideo(7),
  },
  {
    title: "The Old Foundry",
    season: "4",
    episode: "7",
    metadata: ["HD", "UT", "AD"],
    thumbnail: getThumbnail("hbbtv-heritage-s4e7"),
    videoUrl: getVideo(8),
  },
  {
    title: "Rival Queens",
    season: "1",
    episode: "8",
    metadata: ["HD", "DGS", "NEW"],
    thumbnail: getThumbnail("hbbtv-court-s1e8"),
    videoUrl: getVideo(9),
  },
  {
    title: "Signal Lost",
    season: "2",
    episode: "9",
    metadata: ["HD", "5.1", "UT"],
    thumbnail: getThumbnail("hbbtv-threshold-s2e9"),
        videoUrl: getVideo(10),
  },
  {
    title: "Sunday League",
    season: "5",
    episode: "1",
    metadata: ["HD", "AD"],
    thumbnail: getThumbnail("hbbtv-stadium-s5e1"),
    videoUrl: getVideo(11),
  },
  {
    title: "Borrowed Time",
    season: "1",
    episode: "10",
    metadata: ["HD", "UT", "ST"],
    thumbnail: getThumbnail("hbbtv-ward-s1e10"),
    videoUrl: getVideo(12),
  },
  {
    title: "The Auction House",
    season: "2",
    episode: "5",
    metadata: ["UHD", "HDR", "5.1"],
    thumbnail: getThumbnail("hbbtv-velvet-s2e5"),
    videoUrl: getVideo(13),
  },
  {
    title: "Crossing Öresund",
    season: "3",
    episode: "8",
    metadata: ["HD", "UT", "DGS"],
    thumbnail: getThumbnail("hbbtv-bridge-s3e8"),
    videoUrl: getVideo(14),
  },
  {
    title: "First Chair",
    season: "1",
    episode: "4",
    metadata: ["HD", "AD", "NEW"],
    thumbnail: getThumbnail("hbbtv-conservatory-s1e4"),
    videoUrl: getVideo(15),
  },
  {
    title: "Heatwave Protocol",
    season: "6",
    episode: "11",
    metadata: ["HD", "5.1", "UT"],
    thumbnail: getThumbnail("hbbtv-metro-s6e11"),
    videoUrl: getVideo(16),
  },
  {
    title: "The Empty Studio",
    season: "2",
    episode: "6",
    metadata: ["HD", "ST", "DGS"],
    thumbnail: getThumbnail("hbbtv-radio-s2e6"),
    videoUrl: getVideo(17),
  },
  {
    title: "Bloodline (Part One)",
    season: "4",
    episode: "12",
    metadata: ["HD", "UT", "AD", "NEW"],
    thumbnail: getThumbnail("hbbtv-saga-s4e12"),
    videoUrl: getVideo(18),
  },
  {
    title: "Finale: Safe Harbour",
    season: "4",
    episode: "13",
    metadata: ["UHD", "5.1", "UT", "AD"],
    thumbnail: getThumbnail("hbbtv-north-harbour-s4e13"),
    videoUrl: getVideo(19),
  },
];
