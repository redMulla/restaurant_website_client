"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";
import { menuAPI } from "@/lib/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  UtensilsCrossed,
  Users,
  Star,
  TrendingUp,
  Plus,
  LayoutDashboard,
  LogOut,
} from "lucide-react";

export default function AdminDashboard() {
  const router = useRouter();
  const { user, token, logout } = useAuth();
  const [stats, setStats] = useState({
    totalItems: 0,
    featuredItems: 0,
    categories: 4,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    if (!token) {
      router.push("/admin/login");
      return;
    }

    // Fetch stats
    const fetchStats = async () => {
      try {
        const items = await menuAPI.getAll();
        const featured = items.filter((item: any) => item.featured);
        setStats({
          totalItems: items.length,
          featuredItems: featured.length,
          categories: 4,
        });
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [token, router]);

  const handleLogout = () => {
    logout();
    router.push("/admin/login");
  };

  if (!token) {
    return null; // Will redirect
  }

  const statCards = [
    {
      title: "Total Menu Items",
      value: stats.totalItems,
      icon: UtensilsCrossed,
      color: "bg-blue-500",
    },
    {
      title: "Featured Items",
      value: stats.featuredItems,
      icon: Star,
      color: "bg-yellow-500",
    },
    {
      title: "Categories",
      value: stats.categories,
      icon: LayoutDashboard,
      color: "bg-green-500",
    },
    {
      title: "Active Status",
      value: "Online",
      icon: TrendingUp,
      color: "bg-purple-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Admin Dashboard
              </h1>
              <p className="text-gray-600 mt-1">Welcome back, {user?.name}!</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-red-300 text-red-600 hover:bg-red-50"
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        {loading ? (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {statCards.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-gray-600 mb-1">
                            {stat.title}
                          </p>
                          <p className="text-3xl font-bold text-gray-900">
                            {stat.value}
                          </p>
                        </div>
                        <div
                          className={`${stat.color} w-12 h-12 rounded-lg flex items-center justify-center`}
                        >
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    <Link href="/admin/menu-manager">
                      <UtensilsCrossed className="mr-2 h-5 w-5" />
                      Manage Menu Items
                    </Link>
                  </Button>
                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50"
                  >
                    <Link href="/menu">
                      <Star className="mr-2 h-5 w-5" />
                      View Live Menu
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Database Connection</span>
                    </div>
                    <span className="text-green-600 font-medium">Active</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">API Server</span>
                    </div>
                    <span className="text-green-600 font-medium">Running</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">Authentication</span>
                    </div>
                    <span className="text-green-600 font-medium">Secure</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
