import Link from "next/link";
import Layout from "../../components/Layout/Layout";
import GrantFinderSearchBox from "../../components/elements/GrantFinderSearchBox";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
export default function GrantsList() {
    const router = useRouter();
    const { keyword, category, location, page, limit } = router.query;
    const [totalPages, setTotalPages] = useState(0);
    const [totalCount, setTotalCount] = useState(0);

    return (
        <>
            <Layout>
                <div>
                    <h1>Hello</h1>
                </div>
            </Layout>
        </>
    );
}
