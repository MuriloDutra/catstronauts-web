import {gql, useQuery} from "@apollo/client"
import { Layout, QueryResult} from "../components"
import TrackDetail from "../components/track-detail";

export const GET_TRACKS = gql(`
    query GetTrack($trackId: ID!) {
        track(id: $trackId) {
            id
            length
            numberOfViews
            title
            author {
                id
                name
                photo
            }
            thumbnail
            modulesCount
            description
            modules {
                id
                title
                length
            }
        }
    }
`)

export const Track = ({trackId}) => {
    const {loading, error, data} = useQuery(GET_TRACKS, {
        variables: {trackId}
    })

    return (
        <Layout>
            <QueryResult error={error} loading={loading} data={data}>
            <TrackDetail track={data?.track} />
            </QueryResult>
        </Layout>
    )
}
